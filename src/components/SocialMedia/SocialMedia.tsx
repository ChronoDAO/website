import React from 'react'
import "./SocialMedia.scss"
import { TbBrandTwitterFilled, TbBrandDiscordFilled, TbBrandTwitch } from "react-icons/tb";

function SocialMedia() {
  return (
    <div className='container__social-media'>
      <a className='icon__media' href="https://twitter.com/MoogleRocket" target='_blank'><TbBrandTwitterFilled/></a>
      <a className='icon__media' href="/" target='_blank'><TbBrandDiscordFilled/></a>
      <a className='icon__media' href="https://www.twitch.tv/chronodao" target='_blank'><TbBrandTwitch/></a>
    </div>
  )
}

export default SocialMedia