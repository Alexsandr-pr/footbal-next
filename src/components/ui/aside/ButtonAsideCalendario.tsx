"use client";
import { openCalendar } from '@/lib/store/slise';
import { useDispatch } from "react-redux";
import styles from "./aside.module.scss"

const ButtonAside = ({
    name,
} : {
    name:string;
}) => {
    const dispatch = useDispatch();

    return (
        <li  >
            <button onClick={() => dispatch(openCalendar())} className={styles.linksAsideButton}>
                {name}
            </button>
        </li>
    )
}

export default ButtonAside