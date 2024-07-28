import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FilterContextType {
    showLiveGames: boolean;
    setShowLiveGames: (value: boolean) => void;
    coefficient: boolean;
    handleCoefficient: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [showLiveGames, setShowLiveGames] = useState<boolean>(false);
    const [coefficient, setCoefficient] = useState<boolean>(() => {
        const savedCoefficient = localStorage.getItem('coefficient');
        return savedCoefficient ? JSON.parse(savedCoefficient) : true;
    });

    const handleCoefficient = () => {
        setCoefficient(prev => {
            const newValue = !prev;
            localStorage.setItem('coefficient', JSON.stringify(newValue));
            return newValue;
        });
    };

    useEffect(() => {
        const savedCoefficient = localStorage.getItem('coefficient');
        if (savedCoefficient !== null) {
            setCoefficient(JSON.parse(savedCoefficient));
        }
    }, []);

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
