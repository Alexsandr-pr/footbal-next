const revalidateValues = {
    gameCenter: 5,
    today: 2,
    yesterday:2,
    tomorrow: 2,
    dataDay: 5,
};

export  const getRevalidate = (page: keyof typeof revalidateValues) => revalidateValues[page];

export const setRevalidate = (page: keyof typeof revalidateValues, value: number) => {
    revalidateValues[page] = value;
};