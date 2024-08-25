

const CalendarioItem = ({
    children,
    styles,
    clazz
} : {
    styles?:React.CSSProperties;
    children: React.ReactNode;
    clazz?:string;
}) => {
    return (
        <div style={styles} className={`calendario-events__item ${clazz}`}>
            {children}
        </div>
    )
}

export default CalendarioItem