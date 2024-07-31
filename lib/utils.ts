export const getGridStyle = (totalGoals: number) => {
    if (totalGoals > 2) {
        return {
            gridTemplateColumns: 'repeat(2, 1fr)'
        };
    } else {
        return {
            gridTemplateColumns: '1fr'
        };
    }
};


