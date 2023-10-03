import "./CTAButton.scss";

interface CTAButtonProps {
  text: string;
  image?: string;
  image_class?: string;
  link?: string;
  className?: string;
}
const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  image,
  image_class,
  link,
  className,
}) => {
  console.log(image);
  return (
    <a href={`${link}`} className={`cta-button__wrapper ${className}`}>
      {image ? (
        <img
          className={image_class}
          src={`${import.meta.env.CDN_URL}/images${image}`}
        />
      ) : null}
      {text}
    </a>
  );
};

export default CTAButton;
