import '../../styles/css/App.css';
import { useState,useContext,useEffect } from 'react';
import { ThemeContext } from '../Context/ContentContext';
import { ContentContextType } from '../Types/Types';
import { Options } from '../Types/Types';
import { OptionsType } from '../Types/Types';



export const Wrapper=()=> {
const [wrapper,setWrapper]=useState<OptionsType[]>([Options]);
const{transitions,setTransitions,value,setValue,setName,links,setLinks}=useContext(ThemeContext) as ContentContextType;


useEffect(()=>{
   function DobavLocal(){
     if(localStorage.getItem('inputValue')!==null){
        localStorage.setItem('inputValue', JSON.stringify(value));
        setName(`?name=${value}`)}}
        
   window.addEventListener('keyup',DobavLocal)
     return () => {
        window.removeEventListener('keyup',DobavLocal)}
},[value])

 useEffect(()=>{
   let items=JSON.parse(localStorage.getItem('inputValue')|| "");
   if(items){
     setValue(items);}
},[])

function HidePanel(){
   setWrapper(wrapper.map((elem)=>{
      if(elem[0].firstSelect===true){
      elem[0].firstSelect=!elem[0].firstSelect;}
      else if(elem[1].secondSelect===true){
      elem[1].secondSelect=!elem[1].secondSelect;}
      return elem}))
}
function SettingSpecies(species:string,from:number,to:number){
   for(let item of transitions){
      let keys = Object.keys(item).slice(from,to);
      for (let key of keys){
         setTransitions(transitions.map(elem=>{
            if(key===species){
               elem[species]=!elem[species];
               setLinks(links.map(elem=>{
               if(from===0&&to===2){
                 elem['mainSpecias']=species;}
               else if(from===2&&to===5)
                  elem['mainStatus']=species;
               return elem;
               }))
            }else{
               elem[key]=false;
            }
            return elem}))}}
   localStorage.setItem('transitions', JSON.stringify(transitions));
   localStorage.setItem('links', JSON.stringify(links));
   HidePanel();
}

function Reset(value:string){
   setLinks(links.map(elem=>{
        elem[value]=''; 
      return elem;
      }))
   HidePanel();
}

return (<div className="main__wrapper">
          <div className="main__form">
             <input value={value} 
                    onChange={event=>{setValue(event.target.value)}} 
                    type="text" 
                    className="main__form-input" 
                    placeholder="Найти персонажа по имени"/>
          </div>
          <div className="main__form">
            <div className="main__form-select">
              <button onClick={()=>{setWrapper(wrapper.map((elem)=>{
                                               elem[0].firstSelect=!elem[0].firstSelect;
                                               return elem}))}}
                      className="main__form-button">
                 <span className="main__form-span">{links[0]['mainSpecias']?links[0]['mainSpecias'].replace(/^./,links[0]['mainSpecias'][0].toUpperCase()):wrapper[0][0]['name']}</span>
             </button>
             {wrapper[0][0]['firstSelect']?
             <div className="main__form-option">
               <span onClick={()=>{SettingSpecies('human', 0, 2)}} className="main__link">{wrapper[0][0]['optionHuman']}</span>
               <span onClick={()=>{SettingSpecies('alien', 0, 2)}} className="main__link">{wrapper[0][0]['optionAlien']}</span>
               <span onClick={()=>{Reset('mainSpecias')}} className="main__link">Reset species</span>
             </div>:<></>}
             </div>
            <div className="main__form-select">
               <button onClick={()=>{setWrapper(wrapper.map((elem)=>{
                                                elem[1].secondSelect=!elem[1].secondSelect;
                                                return elem}))}}
                       className="main__form-button">
                 <span className="main__form-span">{links[0]['mainStatus']?links[0]['mainStatus'].replace(/^./,links[0]['mainStatus'][0].toUpperCase()):wrapper[0][1]['name']}</span>
               </button>
               {wrapper[0][1]['secondSelect']?
               <div className="main__form-option">
                 <span onClick={()=>{SettingSpecies('alive', 2, 5)}} className="main__link">{wrapper[0][1]['optionAlive']}</span>
                 <span onClick={()=>{SettingSpecies('dead', 2, 5)}} className="main__link">{wrapper[0][1]['optionDead']}</span>
                 <span onClick={()=>{SettingSpecies('unknown', 2, 5)}} className="main__link">{wrapper[0][1]['optionUnknown']}</span>
                 <span onClick={()=>{Reset('mainStatus')}} className="main__link">Reset status</span>
             </div>:<></>}
             </div>
             <div className="main__last">
             <button onClick={()=>{setWrapper(wrapper.map((elem)=>{
                                              elem[2].thirstSelect=!elem[2].thirstSelect;
                                              return elem}))}}
                     className="main__last-button">
              {wrapper[0][2]['thirstSelect']?
              <div className="main__last-option">
                 <span onClick={()=>{SettingSpecies('sort', 5, 9)}} className="main__link">{wrapper[0][2]['optionSort']}</span>
                 <span onClick={()=>{SettingSpecies('sortReverse', 5, 9)}} className="main__link">{wrapper[0][2]['optionSortReverse']}</span>
                 <span onClick={()=>{SettingSpecies('sortNew', 5, 9)}} className="main__link">{wrapper[0][2]['optionNew']}</span>
                 <span onClick={()=>{SettingSpecies('sortOld', 5, 9)}} className="main__link">{wrapper[0][2]['optionOld']}</span>
              </div>:<></>}
             </button>
             </div>
          </div>
       </div> )}

export default Wrapper;