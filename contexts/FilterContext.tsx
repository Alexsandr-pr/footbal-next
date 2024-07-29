"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface FilterContextType {
    showLiveGames: boolean;
    setShowLiveGames: (value: boolean) => void;
    coefficient: boolean;
    handleCoefficient: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [showLiveGames, setShowLiveGames] = useState<boolean>(false);
    const [coefficient, setCoefficient] = useState<boolean>(true);

    // Восстановление состояния из куки только на клиенте
    useEffect(() => {
        const savedCoefficient = Cookies.get('coefficient');
        if (savedCoefficient !== undefined) {
            setCoefficient(JSON.parse(savedCoefficient));
        }
    }, []);

    const handleCoefficient = () => {
        setCoefficient(prev => {
            const newValue = !prev;
            Cookies.set('coefficient', JSON.stringify(newValue));
            return newValue;
        });
    };

    return (
        <FilterContext.Provider value={{ showLiveGames, setShowLiveGames, coefficient, handleCoefficient }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};
