import "./SocialMedia.scss"
import { TbBrandTwitterFilled, TbBrandDiscordFilled, TbBrandTwitch,TbBrandYoutube } from "react-icons/tb";

function SocialMedia() {
  return (
    <div className='container__social-media'>
      <a className='icon__media' href="https://twitter.com/Chrono_Dao" target='_blank' title="Twitter"><TbBrandTwitterFilled/></a>
      <a className='icon__media' href="https://discord.gg/SEb3jxdKJU" target='_blank' title="Discord"><TbBrandDiscordFilled/></a>
      <a className='icon__media' href="https://www.twitch.tv/chronodao" target='_blank' title="Twitch"><TbBrandTwitch/></a>
      <a className='icon__media' href="https://www.youtube.com/channel/UCWO2Gb71CQiNw9-Tp_GWOUw" target='_blank' title="YouTube"><TbBrandYoutube/></a>
    </div>
  )
}

export default SocialMedia;
