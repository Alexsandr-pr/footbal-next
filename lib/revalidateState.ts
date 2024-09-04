const revalidateValues = {
    gameCenter: 5,
    today: 5,
    yesterday: 5,
    tomorrow: 5,
    dataDay: 5,
};

export  const getRevalidate = (page: keyof typeof revalidateValues) => revalidateValues[page];

export const setRevalidate = (page: keyof typeof revalidateValues, value: number) => {
    revalidateValues[page] = value;
};