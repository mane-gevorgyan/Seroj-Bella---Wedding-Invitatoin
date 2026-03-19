import { Lang } from "@/app/page";

export default function LanguageSwitcher({ onChange }: { onChange: (lang: Lang) => void }) {

    const changeLang = (newLang: Lang) => {
        localStorage.setItem("lang", newLang);
        onChange(newLang);
    };

    return (
        <div className="fixed bg-white/60 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-white/30 w-fit">
            <button onClick={() => changeLang("hy")}>🇦🇲</button>
            <button onClick={() => changeLang("ru")}>🇷🇺</button>
            <button onClick={() => changeLang("en")}>🇬🇧</button>
        </div>
    );
}
