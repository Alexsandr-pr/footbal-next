const revalidateValues = {
    gameCenter: 5,
    today: 5,
    yesterday: 5,
    tomorrow: 5,
    dataDay: 5,
};

const getRevalidate = (page) => revalidateValues[page];
const setRevalidate = (page, value) => {
    revalidateValues[page] = value;
};

module.exports = { getRevalidate, setRevalidate };
