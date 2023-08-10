import { Link } from "react-router-dom";
import "./SocialMediaGuild.scss";
import {
  TbBrandDiscordFilled,
  TbBrandTwitch,
  TbBrandTwitterFilled,
} from "react-icons/tb";

export default function SocialMediaGuild({
  twitter,
  discord,
  twitch,
  bigtime,
}: {
  twitter: string;
  discord: string;
  twitch: string;
  bigtime: string;
}) {
  return (
    <div className="social-media-guild__wrapper">
      <Link to={twitter} target="_blank">
        <TbBrandTwitterFilled size={25} />
      </Link>
      <Link to={discord} target="_blank">
        <TbBrandDiscordFilled size={25} />
      </Link>
      <Link to={twitch}>
        <TbBrandTwitch size={25} />
      </Link>
      <Link to={bigtime}>
        <img src="/images/g-bigtime.svg" alt="Bigtime" />
      </Link>
    </div>
  );
}