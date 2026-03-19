'use client'
import { useState, useEffect } from "react";
import { getPlural } from "@/app/lib/plural";
import { Lang } from "@/app/page";

interface CountdownProps {
    targetDate: Date;
    lang: Lang;
    t: {
        day: string[];
        hour: string[];
        minute: string[];
        second: string[];
    };
}

export default function Countdown({ targetDate, lang, t }: CountdownProps) {
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
            <TimeBox value={timeLeft.days} forms={t.day} lang={lang} />
            <TimeBox value={timeLeft.hours} forms={t.hour} lang={lang} />
            <TimeBox value={timeLeft.minutes} forms={t.minute} lang={lang} />
            <TimeBox value={timeLeft.seconds} forms={t.second} lang={lang} />
        </div>
    );
}

function TimeBox({
    value,
    forms,
    lang,
}: {
    value: number;
    forms: string[];
    lang: Lang;
}) {
    return (
        <div className="flex flex-col items-center">
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-4xl`}>{value}</span>
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-2xl`}>
                {getPlural(value, forms, lang)}
            </span>
        </div>
    );
}
