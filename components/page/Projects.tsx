"use client"

import React, { useEffect } from 'react'
import Section from '../Section'
import Skill from '../Skill'

import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from "react-icons/fi";
import MotionSection from '../MotionSection'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 1
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projets");
    }
  }, [inView, setActiveSection]);
  
  return (
    <MotionSection
      id="projects"
      ref={ref}
      content={
        <>
          <Section
            title="Projets perso"
            lgWidth="lg:w-[58rem]"
            xxlWidth="2xl:w-[74rem]"
            bgColor="bg-[#ECB5A3]"
            content={
              <div className="flex flex-wrap justify-center">

                <div className="border-2 border-[#161716] border-b-[6px] w-full lg:w-[46%] h-auto lg:h-[14rem] mb-4 lg:mr-5 bg-[#EAF0EA] p-4 px-6 rounded-xl flex flex-col lg:flex-row relative overflow-hidden">
                  <div className="lg:w-[auto] relative z-10">
                    <div className="flex items-center mb-2">
                      <h2 className="font-bold mb-2 mr-2 text-xl">Hearthdle</h2>
                      <a className="text-[#161716] hover:text-[#ECB5A3] mx-1 mb-[8px]" href="https://github.com/Robin-Combeau/hearthdle-proje" target="_blank">
                        <FaGithub size={24} className='' />
                      </a>
                      {/*                     <a className="text-[#161716] hover:text-[#ECB5A3] mx-1 mb-[8px]" href="http://github.com" target="_blank">
                      <FiExternalLink size={24} className='' />
                    </a> */}
                    </div>

                    <div className="flex flex-col text-sm break-words">
                      <p className="mb-3 break-words">Jeu de devinettes basé sur le jeu de carte Hearthstone.</p>
                    </div>

                    <div className="flex flex-wrap bottom-0 lg:absolute">
                      <Skill skill="SvelteKit" lgTextSize="lg:text-sm" />
                      <Skill skill="Typescript" lgTextSize="lg:text-sm" />
                    </div>
                  </div>
                </div>

                <div className="border-2 border-[#161716] border-b-[6px] w-full lg:w-[46%] h-auto lg:h-[14rem] mb-4 lg:ml-5 bg-[#EAF0EA] p-4 px-6 rounded-xl flex flex-col lg:flex-row relative overflow-hidden">
                  <div className="lg:w-[auto] relative z-10">
                    <div className="flex items-center mb-2">
                      <h2 className="font-bold mb-2 mr-2 text-xl">Ce portfolio</h2>
                      <a className="text-[#161716] hover:text-[#ECB5A3] mx-1 mb-[8px]" href="https://github.com/Robin-Combeau/portfolio-nextjs" target="_blank">
                        <FaGithub size={24} className='' />
                      </a>
                    </div>

                    <div className="flex flex-col text-sm break-words">
                      <p className="mb-3 break-words">Le site web sur lequel vous êtes actuellement.</p>
                    </div>

                    <div className="flex flex-wrap bottom-0 lg:absolute">
                      <Skill skill="Next.js" lgTextSize="lg:text-sm" />
                      <Skill skill="Tailwind" lgTextSize="lg:text-sm" />
                      <Skill skill="Typescript" lgTextSize="lg:text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </>
      }
    />
  )
}