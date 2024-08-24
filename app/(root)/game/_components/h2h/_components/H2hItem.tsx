import { H2HItem } from '@/types/game-center';

const H2hItem = ({
    clazz,
    children
} : H2HItem) => {
    return (
        <div className={`game-center__h2h-item h2h-item ${clazz}`}>
            {children}
        </div>
    )
}

export default H2hItem