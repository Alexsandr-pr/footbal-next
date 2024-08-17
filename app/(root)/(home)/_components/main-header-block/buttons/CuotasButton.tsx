"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCoefficientFromCookies, toggleCoefficient } from "@/store/filterSlice";
import { RootState } from "@/store/store";
import Loading from "@/components/ui/loading/Loading";

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
            {loading ? <Loading size={16}/> : "CUOTAS"}
        </button>
    );
}

export default CuotasButton;
