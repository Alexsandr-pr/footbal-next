"use client";

import { Bell, BellOff } from "lucide-react";
import { loadSoundFromCookies, toggleSound } from "@/store/filterSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../main-header-block.module.scss";
import { RootState } from "@/store/store";
import Loading from "@/components/ui/loading/Loading";


const NotificationButton = () => {
    const dispatch = useDispatch();
    const { sound } = useSelector(
        (state: RootState) => state.filter
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSound = async () => {
            dispatch(loadSoundFromCookies());
            setLoading(false);
        };
        loadSound();
    }, [dispatch]);

    return (
        <button
            onClick={() => dispatch(toggleSound())}
            className={`${styles["button-green"]} button-off ${sound ? "active" : ""}`}
            disabled={loading}
        >
            {loading ? <Loading size={16}/> : sound ? (
                <Bell
                    color="var(--white)"
                    width={16}
                    height={18}
                    strokeWidth={2}
                />
            ) : (
                <BellOff
                    color="var(--green)"
                    width={16}
                    height={18}
                    strokeWidth={2}
                />
            )}
        </button>
    );
};

export default NotificationButton;
