"use client";
import { openCalendar } from '@/store/slise';
import { useDispatch } from "react-redux";


const ButtonAside = ({
    name,
} : {
    name:string;
}) => {
    const dispatch = useDispatch();

    return (
        <li  className="links-aside__item">
            <button onClick={() => dispatch(openCalendar())} className="links-aside__button">
                {name}
            </button>
        </li>
    )
}

export default ButtonAside