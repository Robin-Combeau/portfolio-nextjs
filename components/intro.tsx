import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="border-2 border-[#161716] border-b-[8px] bg-[#EAF0EA] text-2xl font-medium px-6 py-4 pr-12 rounded-xl mx-8 sm:w-[30rem] sm:h-[12.5rem]">
            Bonjour, je m'appelle <span className="font-black text-[#6A8A5D]">Robin</span>. Je suis <span className="font-black text-[#6A8A5D]">développeur fullstack</span> depuis <span className="font-black text-[#6A8A5D]">4 ans</span>.
            <br/><br/>
            Mes domaines de prédilection sont <span className="font-black text-[#6A8A5D]">PHP (Laravel)</span> et <span className="font-black text-[#6A8A5D]">Javascript (React.js)</span>.
            </div>
            {/* <div className="border-2 border-[#161716] border-b-[8px] bg-[#EAF0EA] text-2xl font-medium px-6 py-4 pr-12 rounded-xl sm:w-[30rem] sm:h-[12.5rem]">
            Bonjour, je m'appelle <span className="font-black text-[#6A8A5D]">Robin</span>. Je suis <span className="font-black text-[#6A8A5D]">développeur fullstack</span> depuis <span className="font-black text-[#6A8A5D]">4 ans</span>.
            <br/><br/>
            Mes domaines de prédilection sont <span className="font-black text-[#6A8A5D]">PHP (Laravel)</span> et <span className="font-black text-[#6A8A5D]">Javascript (React.js)</span>.
            </div> */}
        </div>

    </section>
  )
}
