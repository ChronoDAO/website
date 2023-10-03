import "./Twitch.scss";
import CTAButton from "../../components/common/Buttons/CTA-Button/CTAButton"

export default function Twitch() {
  return (
    <>
        <div id="mainTwitch">
            <h1>A propos de notre Extention Twitch</h1>
            <div className="button-container">
                <CTAButton text={"CLUF"} link={"https://chronodao.com/extention_twitch/cluf"} className={"my-button"}/>
                
                <CTAButton text={"Politique de confidentialité"} link={"https://chronodao.com/extention_twitch/politique_de_confidentialite"} className={"my-button"}/>
            </div>
        </div>
    </>
  )
}
