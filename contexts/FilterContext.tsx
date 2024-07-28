import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  showLiveGames: boolean;
  setShowLiveGames: (value: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [showLiveGames, setShowLiveGames] = useState<boolean>(false);

  return (
    <FilterContext.Provider value={{ showLiveGames, setShowLiveGames }}>
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
