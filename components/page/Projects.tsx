"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Section from '../Section'
import Skill from '../Skill'

const Projects = () => {
  return (
    <section id="about">
      <motion.div
        className="flex mb-10 flex-col items-center lg:flex-row lg:justify-center gap-y-4 lg:gap-y-0"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Section
          title="Projets"
          lgWidth="lg:w-[58rem]"
          lgHeight="lg:h-auto"
          bgColor="bg-[#ECB5A3]"
          content={
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-wrap justify-center">
                <div className="border-2 border-[#161716] border-b-[6px] w-full lg:w-[42%] mb-4 lg:mx-8 bg-[#EAF0EA] p-4 px-6 rounded-xl">
                  <h2 className="font-bold mb-2 text-xl">Hearthdle</h2>
                  <div className="flex flex-col text-sm break-words">
                    <p className="mb-3 break-words">Jeu de devinettes basé sur le jeu de carte Hearthstone.</p>
                    <span className="flex flex-wrap bottom-0">
                      <Skill skill="Laravel" lgTextSize="lg:text-sm"/>
                      <Skill skill="React" lgTextSize="lg:text-sm"/>
                      <Skill skill="Tailwind" lgTextSize="lg:text-sm"/>
                    </span>
                  </div>
                </div>

                <div className="border-2 border-[#161716] border-b-[6px] w-full lg:w-[42%] mb-4 lg:mx-8 bg-[#EAF0EA] p-4 rounded-xl">
                <h2 className="font-bold mb-6 text-xl">Project #2</h2>
                  <div className="flex flex-col text-sm break-words">
                    <span className="mb-3 break-words">Après mon diplôme d'ingénieur en agronomie spécialisé dans les nouvelles technologies, j'ai décidé de poursuivre ma passion grandissante pour la programmation. Après une POEI, j'ai commencé à développeur fullstack et cela fait plus de 4 ans aujourd'hui.</span>
                  </div>
                </div>

              </div>
            </div>
          }
        />
      </motion.div>
    </section>
  )
}

export default Projects