import Portfolio from '../models/Portfolio.js';

// @route GET /api/portfolio
const getPortfolio = async (req, res) => {
    try {
        // Only return user's portfolio if logged in
        if (!req.isLoggedIn) {
            return res.status(401).json({ message: "Access Denied. You must be logged in to view portfolio." });
        }

        let portfolio = await Portfolio.findOne({ userId: req.userId });

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
            return res.status(404).json({ message: "User portfolio not found for update. Try refreshing.", updateData, filter });
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