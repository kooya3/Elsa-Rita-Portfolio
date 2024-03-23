import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
       <motion.div

       />
        {/* Social Icons */}
        <SocialIcon
        url="https://twitter.com/kooya3"
        fgColor="gray"
        bgColor="transparent"
        />

        <SocialIcon
        url=""
        fgColor="gray"
        bgColor="transparent"
        />
        
        <SocialIcon 
        url=""
        fgColor="gray"
        bgColor="transparent"
        />

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon 
          className=""
          network=""
          fgColor="gray"
          bgColor="transparent"
          />

          <p className="uppercase hidden md:inline-flex text-gray">
          Get In Touch
          </p>
        </div>
      </div>
    </header>
  )
}
