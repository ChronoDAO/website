import "./CTAButton.scss";

interface CTAButtonProps {
  text: string;
}
const CTAButton: React.FC<CTAButtonProps> = ({ text }) => {
  return <div className="cta-button__wrapper">{text}</div>;
};

export default CTAButton;