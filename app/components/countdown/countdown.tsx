'use client'

import { useState, useEffect } from "react";

interface CountdownProps {
    targetDate: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / 1000 / 60) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

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
            <span className="text-2xl">{label}</span>
        </div>
    );
}