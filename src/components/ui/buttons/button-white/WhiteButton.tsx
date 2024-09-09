

const WhiteButton = ({
    text,
    cb,
    clazz
} : {
    clazz?: string;
    text: string;
    cb: () => void;
}) => {
    return (
        <button onClick={cb} className={`white-button ${clazz}`}>
            {text}
        </button>
    )
}

export default WhiteButton