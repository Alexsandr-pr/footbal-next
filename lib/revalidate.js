const revalidateValues = {
    gameCenter: 5,
    today: 53,
    yesterday: 25,
    tomorrow: 5212,
    dataDay: 5,
};

export default function getRevalidate(page) {
    return revalidateValues[page] || 0; // Возвращает значение или 0, если ключ не найден
}