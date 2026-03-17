import Image from "next/image";
import Button from "./components/button/button";

export default function Home() {

  return (
    <div className="relative min-h-screen bg-white/70">
      <Image
        alt=""
        src="/bg2.jpg"
        fill
        className="object-cover -z-20 opacity-[0.5] "
      />
      <div className="absolute top-48 inset-0 z-10" />

      <div className="relative flex flex-col w-full z-20 md:w-1/2 md:m-auto">
        {/* Welcoming Image */}
        <div className="relative w-full">
          <Image alt="Seroj & Bella" src='/welcoming.JPG' width={500} height={500} className="w-full" />
          <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-b from-transparent to-white"></div>
          <p className="absolute bottom-37.5 left-10 allegroFont text-6xl z-10 text-[#3f452d]">Սերգեյ</p>
          <span className="absolute bottom-[-6%] left-[35%] text-[#9e9e9e] text-[300px] opacity-40">&</span>
          <p className="absolute bottom-26.25 right-22.5 text-6xl allegroFont text-[#fdcdea]">Բելլա</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-20 w-full p-5 md:p-0">
          {/* Dear guests */}
          <div className="flex flex-col justify-center items-center gap-8">
            <span className="allegroFont text-5xl text-center">Բարեկամներ և ընկերներ</span>
            <span className="text-justify">Մեր կյանքում կարևոր իրադարձություն է սպասվում՝ մենք ընտանիք ենք կազմում և ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի լուսավոր օրը.
              <br />
              <br />
              Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին
            </span>
          </div>

          {/* Save the Date */}
          <div className="flex flex-col justify-center items-center">
            <span className="allegroFont text-5xl mb-8">Save the date</span>
            <span className="text-2xl">Հունիս 2026</span>
            <Image alt="07.06.2026" src='/Calendar.png' width={800} height={800} className="w-full" />
          </div>

          {/* The Plan */}
          <span className="allegroFont text-5xl">Օրակարգ</span>

          {/* Church */}
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-center text-xl">15:00 <br />Պսակադրության արարողություն</span>
            <Image alt="Սուրբ Սարգիս Եկեղեցի" src='/Church.svg' width={400} height={400} />
            <span className="text-center">Սուրբ Սարգիս Եկեղեցի</span>
            <Button src={'https://www.google.com/maps/place/St.+Sargis+Vicarial+Church/@40.1771141,44.4996494,17z/data=!3m1!4b1!4m6!3m5!1s0x406abc55928a4281:0x66c99859b58a2740!8m2!3d40.1771141!4d44.5022243!16s%2Fm%2F06w1ytr?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'} />
          </div>

          {/* Marriage */}
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-center text-xl">17:30 <br />ԶԱԳՍ-ի արարողություն</span>
            <Image alt="ԶԱԳՍ-ի արարողություն" src='/Florence.svg' width={400} height={400} />
            <span className="text-center">Ֆլորենս ռեստորանի բակ</span>
            <Button src={'https://www.google.com/maps/place/Florence+Restaurant/@40.1944274,44.4791487,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd73b0648ca1:0x9a95769bab65b2e!8m2!3d40.1944274!4d44.4817236!16s%2Fg%2F11xqpy1r5?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'} />
          </div>

          {/* Marriage */}
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="text-center text-xl">18:00 <br />Հարսանեկան խնջույք</span>
            <Image alt="Հարսանեկան խնջույք" src='/Hall.svg' width={400} height={400} />
            <span className="text-center">Ֆլորենս ռեստորան</span>
            <Button src={'https://www.google.com/maps/place/Florence+Restaurant/@40.1944274,44.4791487,17z/data=!3m1!4b1!4m6!3m5!1s0x406abd73b0648ca1:0x9a95769bab65b2e!8m2!3d40.1944274!4d44.4817236!16s%2Fg%2F11xqpy1r5?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'} />
          </div>

        </div>
      </div>
    </div>
  );
}
