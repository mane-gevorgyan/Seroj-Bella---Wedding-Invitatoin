import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full md:w-1/2 md:m-auto">
      {/* Welcoming Image */}
      <div className="relative w-full">
        <Image alt="Seroj & Bella" src='/welcomeImage.jpg' width={100} height={100} className="w-full" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-linear-to-b from-transparent to-white"></div>
        <p className="absolute bottom-37.5 left-10 squareFont text-6xl z-10">Սերգեյ</p>
        <span className="absolute bottom-[-6%] left-[35%] text-[#9e9e9e] text-[300px] opacity-40">&</span>
        <p className="absolute bottom-26.25 right-22.5 text-6xl allegroFont">Բելլա</p>
      </div>

      <div className="flex flex-col justify-center items-center gap-20 w-full p-5 md:p-0">
        {/* Dear guests */}
        <div className="flex flex-col justify-center items-center gap-8">
          <span className="allegroFont text-5xl">Հարգելի հյուրեր</span>
          <span className="text-justify">
            Մեր ուրախությունը կիսելու համար սիրով հրավիրում ենք Ձեզ
            մեր ընտանեկան առաջին տոնակատարությանը՝ <b>մեր հարսանիքին</b>,
            որում ուզում ենք տեսնել մեր ամենամտերիմ և սիրելի մարդկանց:
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

        {/* Bella's home */}
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-center text-xl">14:00 <br />Հարսի տուն</span>
          <Image alt="Հարսի տուն" src='/House.svg' width={400} height={400} />
          <span>Հասցե՝ ք. Երևան, Իսրայելյան փող., 21</span>
        </div>

        {/* Church */}
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-center text-xl">15:30 <br />Պսակադրության արարողություն</span>
          <Image alt="Սուրբ Սարգիս Եկեղեցի" src='/Church.svg' width={400} height={400} />
          <span className="text-center">Հասցե՝ Սուրբ Սարգիս Եկեղեցի <br /> ք. Երևան, Իսրայելյան փող., 21</span>
        </div>

        {/* Marriage */}
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-center text-xl">17:30 <br />ԶԱԳՍ-ի արարողություն</span>
          <Image alt="ԶԱԳՍ-ի արարողություն" src='/Florence.svg' width={400} height={400} />
          <span className="text-center">Հասցե՝ Ֆլորենս ռեստորանի բակ <br /> ք. Երևան, Բարբյուսի փող., 64/2</span>
        </div>

        {/* Marriage */}
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="text-center text-xl">18:00 <br />Հարսանեկան խնջույք</span>
          <Image alt="Հարսանեկան խնջույք" src='/Hall.svg' width={400} height={400} />
          <span className="text-center">Հասցե՝ Ֆլորենս ռեստորան <br /> ք. Երևան, Բարբյուսի փող., 64/2</span>
        </div>

      </div>
    </div>
  );
}
