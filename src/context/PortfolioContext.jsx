import React, { createContext, useContext, useEffect, useState } from 'react'

const PortfolioContext = createContext();

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};

export const PortfolioProvider = ({ children }) => {
    const [portfolioData, setPortfolioData] = useState({
        skills: {
            technical: {},
            tools: {},
            soft: {}
        },
        projects: {},
        timeline: {},
        experience: {},
        certifications: {}
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgA62hqGXIlETDWdeG_zwMAw_3JbmrD1N_nnqwsCFki1VWf71Yau9C_aDB7T1rTtpZkc-wmtGm8j_-8-QK_szQOMpO4m9VHXKN8_fHgDXPDY_kAYD2t5DGiSNSDwKRDk3qMgLojIuueorwWypUH_45VQ8UQsnJy_yhR82Ge5LZb7JDAA4qBMPvTCHTQYyDGBRg_mLM-9_ui06C6ZULNmDk5YNOlTgLWEIr7_hv5hR8wpUspZnU1IXynA2g4VgrXRrWndoEgEBnvsh0XChqlxeW1YYBXRw&lib=MG3udjzZpceiyqa1B5vhO-Eoqp0CymBxD');
                if (!response.ok) {
                    throw new Error('Failed to fetch portfolio data');
                }

                const data = await response.json();
                setPortfolioData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }   
        }

        fetchPortfolioData();
    }, []);

    return (
        <PortfolioContext.Provider value={{
            portfolioData,
            loading,
            error
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}