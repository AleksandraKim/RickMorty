import '../../styles/css/App.css';
import { useState } from 'react';
import Background from '../Background/Background';
import NavBar from '../NavBar/NavBar';
import Wrapper from '../Wrapper/Wrapper';
import Characters from '../Characters/Characters';
import { ThemeContext } from '../Context/ContentContext';
import { TransitionsArray } from '../Types/Types';
import { TransitionsType } from '../Types/Types';
import { LinksType } from '../Types/Types';
import { Links } from '../Types/Types';


export const Main=()=> {
  const [transitions,setTransitions]=useState<TransitionsType[]>(TransitionsArray);
  const [links,setLinks]=useState<LinksType[]>(Links);
  const [value,setValue]=useState<string>('');
  const [name,setName]=useState<string>('');

  return (<main className="main">
             <Background/>
             <ThemeContext.Provider value={{transitions,setTransitions,links,setLinks,value,setValue,name,setName}}>
               <NavBar/>
               <div className="main__inner">
                  <Wrapper/>
                  <Characters/>
               </div>
             </ThemeContext.Provider>
          </main>
         )}

export default Main;