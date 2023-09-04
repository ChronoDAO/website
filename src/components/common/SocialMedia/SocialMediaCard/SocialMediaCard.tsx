import { Link } from "react-router-dom";
import "./SocialMediaCard.scss";
import { TbBrandTwitch, TbBrandTwitterFilled } from "react-icons/tb";

export default function SocialMediaGuild({
  twitter,
  twitch,
  bigtime,
}: {
  twitter: string;
  twitch: string;
  bigtime: string;
}) {
  return (
    <div className="social-media-guild__wrapper">
      <Link to={twitter} target="_blank">
        <TbBrandTwitterFilled size={36} />
      </Link>
      <Link to={twitch}>
        <TbBrandTwitch size={36} />
      </Link>
      <Link to={bigtime}>
        <img
          src={`${import.meta.env.CDN_URL}/images/assets/icons/g-bigtime.svg`}
          alt="Bigtime"
        />
      </Link>
    </div>
  );
}
