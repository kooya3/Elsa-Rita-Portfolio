import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header> 
      <div className="flex flex-row items-center">
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
        fgColor=""
        bgColor=""
        />

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon 
          className=""
          network=""
          fgColor=""
          bgColor=""
          />

          <p className="uppercase hidden md:inline-flex text-gray">
          Get In Touch
          </p>
        </div>
      </div>
    </header>
  )
}
