'use client'

import { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = new Date("2026-06-07T15:00:00");

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return <span>🎉 Օրը հասել է 🎉</span>;
    }

    return (
        <div className="flex gap-4 text-center">
            <TimeBox value={timeLeft.days} label="օր" />
            <TimeBox value={timeLeft.hours} label="ժամ" />
            <TimeBox value={timeLeft.minutes} label="րոպե" />
            <TimeBox value={timeLeft.seconds} label="վայրկյան" />
        </div>
    );
}

function TimeBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-4xl handwrittenFont">{value}</span>
            <span className="text-2xl ">{label}</span>
        </div>
    );
}