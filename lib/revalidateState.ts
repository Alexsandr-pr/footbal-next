const revalidateValues = {
    gameCenter: 5,
    today: 522,
    yesterday:11,
    tomorrow: 5654654,
    dataDay: 5,
};

export  const getRevalidate = (page: keyof typeof revalidateValues) => revalidateValues[page];

export const setRevalidate = (page: keyof typeof revalidateValues, value: number) => {
    revalidateValues[page] = value;
};