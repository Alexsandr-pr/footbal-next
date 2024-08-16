"use client";
import React, { useState, useEffect } from "react";
import {
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    format,
    addDays,
    subDays,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./calendar.scss";
import { useRouter } from "next/navigation";
import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { closeCalendar } from "@/store/slise";

const Calendar = () => {

    const calendar = useSelector((state: RootState) => state.counter.calendar);

    const daysOfWeek = ["Mn", "Tu", "We", "Th", "Fr", "St", "Su"];
    const [currentDate, setCurrentDate] = useState<Date | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const router = useRouter();
    const dispatch = useDispatch();
    
    useEffect(() => {
        const currentPath = window.location.pathname;
        const dateMatch = currentPath.match(/\/games\/(\d{2}-\d{2}-\d{4})/);

        if (dateMatch) {
            setSelectedDate(new Date(dateMatch[1].split('-').reverse().join('-')));
            setCurrentDate(new Date(dateMatch[1].split('-').reverse().join('-')));
        } else {
            setCurrentDate(new Date());
        }
    }, []);

    if (!currentDate) return null;

    const startOfCurrentMonth = startOfMonth(currentDate);
    const endOfCurrentMonth = endOfMonth(currentDate);

    const getCalendarDays = (): Date[] => {
        const days: Date[] = [];

        const firstDayIndex = startOfCurrentMonth.getDay() === 0 ? 6 : startOfCurrentMonth.getDay() - 1;

        for (let i = 0; i < firstDayIndex; i++) {
            days.unshift(subDays(startOfCurrentMonth, i + 1));
        }

        for (
            let day = startOfCurrentMonth;
            day <= endOfCurrentMonth;
            day = addDays(day, 1)
        ) {
            days.push(day);
        }

        const remainingDays = 42 - days.length;
        for (let i = 0; i < remainingDays; i++) {
            days.push(addDays(endOfCurrentMonth, i + 1));
        }

        return days;
    };

    const calendarDays = getCalendarDays();

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const isToday = (date: Date): boolean => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isCurrentMonth = (date: Date): boolean => {
        return date.getMonth() === currentDate.getMonth();
    };

    const isWeekend = (date: Date): boolean => {
        const day = date.getDay();
        return day === 0 || day === 6; 
    };

    const isSelectedDate = (date: Date): boolean => {
        return selectedDate !== null && date.toDateString() === selectedDate.toDateString();
    };
    

    const handleDayClick = (date: Date) => {
        setSelectedDate(date);
        router.push(`/games/${format(date, "dd-MM-yyyy")}`);
        dispatch(closeCalendar());
    };
    
    const handleWrapperClick = () => {
        dispatch(closeCalendar());
    };
    
    const handleInnerClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div onClick={handleWrapperClick} className={`calendar-wrapper ${calendar ? "active" : ""}`}>
            <div onClick={handleInnerClick} className="calendar-container">
                <div className="calendar-header">
                    <button className="calendar-nav-button" onClick={prevMonth}>
                        <ChevronLeft height={16} className="calendar-icon" />
                    </button>
                    <span className="calendar-month">{format(currentDate, "MMMM")} <strong>{format(currentDate, "yyyy")}</strong></span>
                    <button className="calendar-nav-button" onClick={nextMonth}>
                        <ChevronRight height={16} className="calendar-icon" />
                    </button>
                </div>
                <div className="calendar-weekdays">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="calendar-weekday">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="calendar-days">
                    {calendarDays.map((day, index) => (
                        <div className="calendar-day-wrapper" key={index}>
                            <button className={`calendar-day ${isToday(day) ? "today" : ""} ${!isCurrentMonth(day) ? "other-month" : "" } ${isWeekend(day) ? "weekend" : ""} ${isSelectedDate(day) ? "selected" : "" }`}
                                onClick={() => handleDayClick(day)}
                                >
                                <span>{format(day, "d")}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
