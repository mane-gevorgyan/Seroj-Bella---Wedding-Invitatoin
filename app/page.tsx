'use client'
import Image from "next/image";
import Button from "./components/button/button";
import RSVP from "./components/RSVP/rsvp";
import Countdown from "./components/countdown/countdown";
import { useState } from "react";
import { translations } from "./lib/translations";
import LanguageSwitcher from "./components/language/language";

export type Lang = 'hy' | 'ru' | 'en';

export default function Home() {
  const [lang, setLang] = useState<Lang>('hy');
  const t = translations[lang];

  return (
    <div className="relative min-h-screen bg-white/70 flex flex-col items-center">
      <Image
        alt=""
        src="/bg2.jpg"
        fill
        className="object-cover -z-20 opacity-[0.5]"
      />
      <div className="absolute top-48 inset-0 z-10" />

      <div className="relative flex flex-col items-center w-full max-w-125 z-20 gap-20 md:w-1/2 md:m-auto">
        {/* Langage Switcher */}
        <div className="absolute mr-6 top-5 right-20 z-20">
          <LanguageSwitcher onChange={setLang} />
        </div>

        {/* Welcoming Image */}
        <div className="w-full flex flex-col items-center">
          <Image
            alt="Seroj & Bella"
            src='/img1.jpg'
            width={500}
            height={500}
            className="h-screen object-cover md:h-auto"
          />
          <div className="w-full relative">
            <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-b from-transparent to-white" />
            <p className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} absolute bottom-37.5 left-12 text-6xl z-10 text-[#3f452d]`}>{t.sergey}</p>
            <span className="absolute bottom-[-6%] left-[35%] text-[#9e9e9e] text-[300px] opacity-40">&</span>
            <p className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} absolute bottom-26.25 right-22 text-6xl text-[#f7f6f6]`}>{t.bella}</p>
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} absolute bottom-10 left-[30%] text-[#3f452d] text-6xl`}>07.06.26</span>
            <div className="absolute -bottom-4 left-0 w-full h-4 bg-linear-to-t from-transparent to-white" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-16 w-full p-5 md:p-0">
          {/* Dear guests */}
          <div className="flex flex-col justify-center items-center gap-8">
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-5xl text-center`}>{t.guests}</span>
            <span className="text-justify">{t.invite}</span>
          </div>

          {/* Calendar */}
          <div className="flex flex-col justify-center items-center">
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-5xl mb-8`}>{t.saveDate}</span>
            <span className="text-2xl">{t.june}</span>
            <div className="relative">
              <Image
                alt="07.06.2026"
                src='/Calendar.png'
                width={425}
                height={425}
              />
              <Image
                alt=""
                src='/heart.png'
                width={60}
                height={60}
                className="absolute -right-px -bottom-2.5"
              />
            </div>
          </div>

          {/* The Plan */}
          <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-5xl`}>{t.plan}</span>

          {/* Church */}
          <div className="flex flex-col justify-center items-center gap-4">
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-2xl`}>15:00 <br />{t.weddingCeremony}</span>
            <Image alt={t.church} src='/Church.svg' width={500} height={500} />
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-2xl`}>{t.church}</span>
            <Button
              src={'https://www.google.com/maps/place/St.+Sargis+Vicarial+Church/@40.1771141,44.4996494,17z/data=!3m1!4b1!4m6!3m5!1s0x406abc55928a4281:0x66c99859b58a2740!8m2!3d40.1771141!4d44.5022243!16s%2Fm%2F06w1ytr?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'}
              translation={t}
              language={lang}
            />
          </div>

          {/* Civil Marriage */}
          <div className="flex flex-col justify-center items-center gap-4">
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-2xl`}>17:30 <br />{t.civilRegistry}</span>
            <Image alt={t.civilRegistry} src='/Florence.svg' width={500} height={500} />
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-2xl`}>{t.florenceRestaurantCourtyard}</span>
            <Button
              src={'https://www.google.com/maps/place/Florence+Restaurant/@40.1944274,44.4791487,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd73b0648ca1:0x9a95769bab65b2e!8m2!3d40.1944274!4d44.4817236!16s%2Fg%2F11xqpy1r5?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'}
              translation={t}
              language={lang}
            />
          </div>

          {/* Wedding Party */}
          <div className="flex flex-col justify-center items-center gap-4">
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-2xl`}>18:00 <br />{t.weddingParty}</span>
            <Image alt={t.weddingParty} src='/Hall.svg' width={500} height={500} />
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-2xl`}>{t.florenceRestaurant}</span>
            <Button
              src={'https://www.google.com/maps/place/Florence+Restaurant/@40.1944274,44.4791487,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd73b0648ca1:0x9a95769bab65b2e!8m2!3d40.1944274!4d44.4817236!16s%2Fg%2F11xqpy1r5?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'}
              translation={t}
              language={lang}
            />
          </div>

          {/* Photo 2 */}
          <div className="relative w-full">
            <Image alt="" src='/img2.jpg' width={500} height={500} />
            <div className="absolute top-0 left-0 w-full h-10 bg-linear-to-t from-transparent to-white" />
            <div className="absolute right-0 top-0 w-4 h-full bg-linear-to-r from-transparent to-white" />
            <div className="absolute left-0 top-0 w-4 h-full bg-linear-to-l from-transparent to-white" />
            <div className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-b from-transparent to-white" />
          </div>

          {/* Harcatertik */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-5xl text-center mb-3`}>{t.confirm}</span>
              <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-5xl text-center`}>25.05.26</span>
            </div>
            <RSVP
              translation={t}
              language={lang}
            />
          </div>

          {/* Countdown */}
          <div className="flex flex-col justify-center items-center gap-8">
            <p className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} text-6xl`}>{t.countdown}</p>
            <Countdown
              targetDate={new Date("2026-06-07T15:00:00")}
              lang={lang}
              t={translations[lang]}
            />
          </div>

          {/* Photo 3 */}
          <div className="relative w-full">
            <Image alt="" src='/img3.jpg' width={500} height={500} />
            <div className="absolute top-0 left-0 w-full h-10 bg-linear-to-t from-transparent to-white" />
            <div className="absolute right-0 top-0 w-4 h-full bg-linear-to-r from-transparent to-white" />
            <div className="absolute left-0 top-0 w-4 h-full bg-linear-to-l from-transparent to-white" />
            <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-b from-transparent to-white" />
            <span className={`${lang === 'ru' ? 'russianFont' : 'handwrittenFont'} absolute bottom-10 text-center text-[#3f452d] text-4xl xl:left-[30%]`}>{t.waiting}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
