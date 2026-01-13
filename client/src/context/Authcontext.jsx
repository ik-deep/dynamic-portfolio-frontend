import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // We'll use Axios for API calls
import { toast } from 'react-toastify';

// Configure axios base URL
axios.defaults.baseURL = 'http://localhost:5000';

// 1. Create the Context
export const AuthContext = createContext();

// 2. Create the Provider Component
 const AuthProvider = ({ children }) => {
    // Check localStorage for a token on initial load
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    // State to hold the portfolio data currently displayed
    const [portfolioData, setPortfolioData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // --- Core Methods ---

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setIsLoggedIn(true);
        // Portfolio data will be fetched in useEffect after this state change
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsLoggedIn(false);
        toast.error("Logout successful!")
        // Fetching the default portfolio happens immediately after this state change
    };
    
    // Set up Axios interceptor to automatically add the token to every request
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            // Remove header if token is missing (used for default view)
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);


    // --- Portfolio Data Fetching Logic (The Core) ---
    const fetchPortfolio = async () => {
        if (!token) {
            setPortfolioData(null);
            setIsLoading(false);
            return;
        }
        
        setIsLoading(true);
        try {
            const response = await axios.get('/api/portfolio'); 
            setPortfolioData(response.data);
        } catch (error) {
            console.error("Error fetching portfolio:", error);
            setPortfolioData(null);
        } finally {
            setIsLoading(false);
        }
    };
    const updatePortfolio = async (updatedData) => {
        if (updatedData != null) console.log("Updating portfolio with:", updatedData)
        try {
            const response = await axios.put('/api/portfolio', updatedData);
            setPortfolioData(response.data);
            toast.success("Portfolio updated successfully!");
        } catch (error) {
            console.error("Error updating portfolio:", error);
            toast.error("Failed to update portfolio.");
        }
    };
    
    // Fetch data only when logged in
    useEffect(() => {
        if (isLoggedIn) {
            fetchPortfolio();
        } else {
            setPortfolioData(null);
            setIsLoading(false);
        }
    }, [isLoggedIn]);

    // 3. Provide the state and functions to the rest of the app
    const contextValue = {
        isLoggedIn,
        token,
        portfolioData,
        isLoading,
        login,
        logout,
        fetchPortfolio,
        updatePortfolio // Allow components to manually trigger a refresh after PUT
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;