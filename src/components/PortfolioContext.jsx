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
        skills: {},
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
                const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjFClcIcomA5oTifgBwN7-B4zYfpxiRDWDzoh8_vwmuhN8gVza2-JnwhdB6id0CTP5DjdErLr5Yxyp0MndqecXtRmv9_53EM1kmOJZNbJK1sWJ7fVRY21ooSeu7ypXwcNoxD_J7CS7LTy6hcVULzecmI6FDwA9CQ5KzM2AqnAXOcvpuJ1_eJe2KJmsG12oKo2P_u92XDqinTBLiB0ENYfxxtXXq_52jOp8fJ4RU9ygQ52a67lJopA7tldop7Um4N9iA5WgT2iUtP1Fe-2vCkX1Qv2SIMg&lib=MG3udjzZpceiyqa1B5vhO-Eoqp0CymBxD');
                if (!response.ok) {
                    throw new Error('Failed to fetch portfolio data');
                }

                const data = await response.json();
                setPortfolioData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
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