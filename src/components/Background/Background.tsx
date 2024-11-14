import '../../styles/css/App.css';
import logo from '../../images/main/name.png'
import secondBack from '../../images/main/Rectangle 6 (1).png';
import firstBack from '../../images/main/Group 6.png';




export const Background=()=>{

  return (<div className="main__background">
        <img src={logo} alt="backgroundRick&Morty" className="main__background-imageLogo" />
        <img src={firstBack} alt="backgroundRick&Morty" className="main__background-imageFirst" />
        <img src={secondBack} alt="backgroundRick&Morty" className="main__background-imageSecond" />
    </div>)}

export default Background;