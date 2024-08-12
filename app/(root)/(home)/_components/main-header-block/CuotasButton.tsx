"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCoefficientFromCookies, toggleCoefficient } from "@/store/filterSlice";
import { RootState } from "@/store/store";
import Image from "next/image";

const CuotasButton = () => {
    const dispatch = useDispatch();
    const { coefficient } = useSelector(
        (state: RootState) => state.filter
    );
    const [loading, setLoading] = useState(true);

    const handleToggleCoefficient = () => {
        dispatch(toggleCoefficient());
    };

    useEffect(() => {
        const loadCoefficient = async () => {
            dispatch(loadCoefficientFromCookies());
            setLoading(false);
        };

        loadCoefficient();
    }, [dispatch]);

    return (
        <button 
            onClick={handleToggleCoefficient}
            className={`green-cuotas ${!coefficient ? "active" : ""}`}
            disabled={loading}
        >
            {loading ? 
            <Image
                src="/assets/loading/loading.gif" 
                height={16}
                width={16}
                alt="Loading"
            />
            : "CUOTAS"}
        </button>
    );
}

export default CuotasButton;
