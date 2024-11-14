import '../../styles/css/App.css';
import name from '../../images/main/name.png';



function Loading() {

  return (
   <div className="main__loader">
    <img src={name} alt="Rick&MortyAlive" className="main__loader-image" />:
   </div>
  )
}

export default Loading;