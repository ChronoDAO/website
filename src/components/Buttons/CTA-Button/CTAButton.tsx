import "./CTAButton.scss";

interface CTAButtonProps {
  text: string;
  image?: string;
  image_class?: string;
  link?: string;
}
const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  image,
  image_class,
  link,
}) => {
  return (
    <a href={`${link}`} className="cta-button__wrapper">
      {image ? <img className={image_class} src={`/images/${image}/`} /> : null}
      {text}
    </a>
  );
};

export default CTAButton;
