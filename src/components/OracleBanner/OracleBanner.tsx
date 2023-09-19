import "./OracleBanner.scss"; 
import logoImg from "../../../public/images/Test/logo.png"
function OracleBanner() {


  return (
    <div className="wrapp__container">
      <div className="Oracle__wrapper">
       <h2><a href="2"><img src={logoImg}/><span className="blue-text">CLIQUEZ</span> pour rejoindre l'oracle et éclairer votre destin.</a></h2>
       <h2><a href="/"><img src={logoImg}/><span className="blue-text">CLIQUEZ</span> pour rejoindre l'oracle et éclairer votre destin.</a></h2>
       <h2><a href="/"><img src={logoImg}/><span className="blue-text">CLIQUEZ</span> pour rejoindre l'oracle et éclairer votre destin.</a></h2>
       <h2><a href="/"><img src={logoImg}/><span className="blue-text">CLIQUEZ</span> pour rejoindre l'oracle et éclairer votre destin.</a></h2>
       {/* <h1><a href="/"><span className="blue-text">CLIQUEZ</span> pour rejoindre l'Oracle et dominez!</a></h1>
       <h1><a href="/"><span className="blue-text">CLIQUEZ</span> pour rejoindre l'Oracle et dominez!</a></h1>
       <h1><a href="/"><span className="blue-text">CLIQUEZ</span> pour rejoindre l'Oracle et dominez!</a></h1> */}
 
      </div>
    </div>
  );
}

export default OracleBanner;
