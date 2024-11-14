import '../../styles/css/App.css';
import { useContext,useEffect } from 'react';
import { ThemeContext } from '../Context/ContentContext';
import { ContentContextType } from '../Types/Types';
import useFetch from '../Fetch/FetchApi';
import green from '../../images/main/green.png';
import red from '../../images/main/red.png';
import { Character } from '../Types/Types';


function Characters(){
const{transitions,setTransitions,links,value,name,setName,setLinks}=useContext(ThemeContext) as ContentContextType;
const{data,isLoading,error}=useFetch<Character[]>(`https://rickandmortyapi.com/api/character/${name}`);
let sort;
let res;

+function() {
	if(localStorage.getItem('transitions')===null){
    localStorage.setItem('transitions', JSON.stringify(transitions));
    localStorage.setItem('links', JSON.stringify(links));
    localStorage.setItem('inputValue', JSON.stringify(value));
    localStorage.setItem('sort', JSON.stringify(sort));
}
}();

useEffect(()=>{
  let items=JSON.parse(localStorage.getItem('transitions')|| "");
  if(items){setTransitions(items)};
  let itemsLinks=JSON.parse(localStorage.getItem('links')|| "");
  if(itemsLinks){setLinks(itemsLinks)};
  let itemsSort=JSON.parse(localStorage.getItem('links')|| "");
  if(itemsSort){sort=itemsSort};
},[])

useEffect(()=>{
  if(transitions[0]['human']||
    transitions[0]['alien']||
    transitions[0]['alive']||
    transitions[0]['dead']||
    transitions[0]['unknown']){
    setName(`?name=${value}&species=${links[0]['mainSpecias']}&status=${links[0]['mainStatus']}`);
  }
},[transitions])

if(isLoading)return <p></p>;
if(error)return<p>Error:{error}</p>;

if(transitions[0]['sort']){
sort=data?.sort(function IHaveAName(a:any, b:any) { 
  return b.name < a.name ?  1 
       : b.name > a.name ? -1 
       : 0;                  
});}

if(transitions[0]['sortNew']){
sort=data?.sort(function IHaveAName(a:any, b:any) { 
  return b.created < a.created ?  1 
       : b.created > a.created ? -1 
       : 0;                  
});}

if(transitions[0]['sortOld']){
sort=data?.sort(function IHaveAName(a:any, b:any) { 
  return b.created > a.created ?  1 
       : b.created < a.created ? -1 
       : 0;                  
});}

if(transitions[0]['sortReverse']){
sort=data?.sort(function IHaveAName(a:any, b:any) { 
    return b.name > a.name ?  1 
         : b.name < a.name ? -1 
         : 0;                  
  })
}

res=data?.map((character:any)=>{
  return <div key={character.id}
              className="main__items-character">
             <img src={character.image} 
                  alt="Rick&MortyImage" 
                  className="main__items-character image" />
              <div className="main__items-character opisanie">
                <div className="main__items-character opisanie__name">{character.name}</div>
                <div className="main__items-character opisanie__main">
                   <div className="main__items-character opisanie__main-species"> {character.species}</div>
                   {character.status==='Alive'?
                   <img src={green} alt="Rick&MortyAlive" className="main__items-character opisanie__main-image" />:
                   <img src={red} alt="Rick&MortyDead" className="main__items-character opisanie__main-image" />}
                   <div className="main__items-character opisanie__main-status"> {character.status}</div>
                </div>
                <div className="main__items-character opisanie__last"> 
                  <span className="opisanie__last-span">Последний раз был замечен:</span>
                  <a href='\' className="opisanie__last-link">{character.location.name}</a>
                  </div>
                <div className="main__items-character opisanie__first"> 
                  <span className="opisanie__last-span">Впервые увиден в</span>
                  <a href='\' className="opisanie__last-link">{character.origin.name}</a>
                </div>
                </div>
          </div>
})
return (<div className="main__items">{res}</div>)}

export default Characters;