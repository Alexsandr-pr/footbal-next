
const CalendarioItemsContainer = ({
    styles,
    children,
    clazz
} : {
    styles?:React.CSSProperties;
    children:React.ReactNode;
    clazz?: string;
}) => {
    return (
        <div style={styles} className={`calendario-events__items ${clazz ? ` ${clazz}` : ''}`}>
            {children}
        </div>
    )
}

export default CalendarioItemsContainer