import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header> 
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
        url=""
        fgColor=""
        bgColor=""
        />

        <SocialIcon
        url=""
        fgColor=""
        bgColor=""
        />
        
        <SocialIcon 
        url=""
        fgColor=""
        bgColor=""
        />

        <div>
          <SocialIcon 
          className=""
          network=""
          fgColor=""
          bgColor=""
          />

          <p className="uppercase hidden md:inline-flex text-gray">Get In Touch</p>
        </div>
      </div>
    </header>
  )
}
