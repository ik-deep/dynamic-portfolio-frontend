// /server/controllers/portfolio.controller.js

import Portfolio from '../models/Portfolio.js';
const DEFAULT_ID = "DEFAULT_PORTFOLIO_ID"; 

// @route GET /api/portfolio
const getPortfolio = async (req, res) => {
    try {
        let targetId;

        // 1. Determine Target ID based on login status
        if (req.isLoggedIn) {
            targetId = req.userId; // Use logged-in user's ID
        } else {
            targetId = DEFAULT_ID; // Use the hardcoded default ID
        }

        let portfolio = await Portfolio.findOne({ userId: targetId });

        // 2. Handle First-Time Login (Copy Default Data)
        if (req.isLoggedIn && !portfolio) {
            console.log(`User ${req.userId} logged in first time. Creating portfolio.`);
            
            // Fetch the default content template
            const defaultTemplate = await Portfolio.findOne({ userId: DEFAULT_ID });

            if (!defaultTemplate) {
                // Should only happen if seedDefaultData failed
                return res.status(500).json({ message: "Default template is missing on server." });
            }

            // Create a new portfolio based on the default template
            const templateObject = defaultTemplate.toObject();
            delete templateObject._id; // Remove default ID before copying
            delete templateObject.userId; // Ensure userId is set correctly below

            portfolio = await Portfolio.create({
                ...templateObject, // Copy all fields
                userId: req.userId, // Set the user's specific ID
            });
        }

        if (!portfolio) {
             return res.status(404).json({ message: "Portfolio content not found." });
        }
        
        // 3. Send the resulting portfolio data
        res.json(portfolio);

    } catch (error) {
        console.error("Error fetching portfolio:", error);
        res.status(500).json({ message: "Server error retrieving portfolio content." });
    }
};


// @route PUT /api/portfolio
const updatePortfolio = async (req, res) => {
    // 1. Mandatory Security Check: Must be logged in to update
    if (!req.isLoggedIn) {
        return res.status(401).json({ message: "Access Denied. You must be logged in to edit." });
    }

    try {
        // Ensure user can only update their own portfolio
        const filter = { userId: req.userId }; 
        const updateData = { ...req.body, lastUpdated: new Date() };
        // console.log(updateData,filter);        
        const updatedPortfolio = await Portfolio.findOneAndUpdate(
            filter, 
            updateData, 
            { new: true, runValidators: true } // Return the new document
        );

        if (!updatedPortfolio) {
            return res.status(404).json({ message: "User portfolio not found for update. Try refreshing.", updateData,filter });
        }

        res.json({ message: "Portfolio updated successfully!", data: updatedPortfolio });

    } catch (error) {
        console.error("Error updating portfolio:", error);
        // Handle validation errors from Mongoose
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: "Failed to update portfolio." });
    }
};

export {
    getPortfolio,
    updatePortfolio
};