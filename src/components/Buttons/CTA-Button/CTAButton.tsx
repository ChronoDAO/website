import "./CTAButton.scss";

interface CTAButtonProps {
  text: string;
  image?: string;
  image_class?: string;
}
const CTAButton: React.FC<CTAButtonProps> = ({ text, image, image_class }) => {
  return (
    <div className="cta-button__wrapper">
      {image ? <img className={image_class} src={`/images/${image}/`} /> : null}
      {text}
    </div>
  );
};

export default CTAButton;
