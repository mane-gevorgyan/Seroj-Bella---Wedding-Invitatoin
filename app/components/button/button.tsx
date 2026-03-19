'use client'
import { translations } from "@/app/lib/translations";
import { Lang } from "@/app/page";

type Translation = typeof translations['hy'];

interface IButtonProps {
    src: string;
    translation: Translation;
    language?: Lang;
}

export default function Button({ src, translation, language }: IButtonProps) {
    const onClickChurch = () => {
        window.open(src, '_blank')
    };

    return (
        <button
            className={`${language === 'ru' ? 'russianFont' : 'handwrittenFont'} rounded-4xl py-4 px-6 bg-linear-to-r from-[#fdcdea] via-[#ffe5eb] to-[#efe6eb] cursor-pointer text-2xl`}
            onClick={onClickChurch}
        >
            {translation.howToGetThere}
        </button>)
};