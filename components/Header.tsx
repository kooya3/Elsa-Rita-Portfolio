import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
       <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* Social Icons */}
        <SocialIcon
        url="https://twitter.com/elsarita6020"
        fgColor="gray"
        bgColor="transparent"
        />

        <SocialIcon
        url="https://github.com/ElyeesT"
        fgColor="black"
        bgColor="transparent"
        />
        
        <SocialIcon 
        url="https://www.linkedin.com/in/elsarita-njoki-oulie-b22b3a291/"
        fgColor="gray"
        bgColor="transparent"
        />
        </motion.div>

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon 
          className="cursor-pointer"
          network='email'
          fgColor="gray"
          bgColor="transparent"
          />

          <p className="uppercase hidden md:inline-flex text-gray">
          Get In Touch
          </p>
        </div>
    </header>
  )
}
