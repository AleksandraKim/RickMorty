import '../../styles/css/App.css';
import Background from '../Background/Background';
import NavBar from '../NavBar/NavBar';
import useFetch from '../Fetch/FetchApi';
import EpisodesCharacters from './EpisodesCharacters';
import { Episode } from '../Types/Types';


export const Episodes=()=> {
const{data,isLoading,error}=useFetch<Episode[]>("https://rickandmortyapi.com/api/episode");
let res;

if(isLoading)return <p>Loading...</p>;
if(error)return<p>Error:{error}</p>
  
res=data?.map((episode:any)=>{
   return <div key={episode.id} className="main__episodes episode">
             <div className="episode__name">{episode.name}</div>
             <div className="episode__episode">Серия: <span className="episode__episode-span">{episode.episode}</span></div>
             <div className="episode__created">Дата создания: <span className="episode__created-span">{episode.created}</span></div>
             <div className="episode__created">Дата выхода в эфир: <span className="episode__created-span">{episode.air_date}</span></div>
             <EpisodesCharacters characters={episode.characters} id={episode.id}/>
          </div>
  })

  return (
    <main className="main">
       <Background/>
       <NavBar/>
     <div className="main__inner">
       <div className="main__episodes">{res}</div>
     </div>
 </main>
  )
}

export default Episodes;