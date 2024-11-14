import '../../styles/css/App.css';
import { FC,useState,useEffect} from 'react';

interface EpisodesCharactersProps{
    characters:Array<string>;
    id:string;
}

let EpisodesCharacters: FC<EpisodesCharactersProps>=({characters})=>{
let [arr,setArr]=useState<any>();

  useEffect(()=>{
    const fetchURLs = async (urls:any) => {
    try {
        const promises =
            urls.map((url:any) => fetch(url));
        const responses =
            await Promise.all(promises);
        const data = await
            Promise.all(responses.map(response => response.json()));
        return data
      }
    catch (error) {
        throw new Error(`Failed to fetch data: ${error}`)}}
  
  fetchURLs(characters)
    .then(data => {
      setArr(data)
  })
    .catch(error => {
        console.error('Error fetching data:', error)});
  
},[])

let res=arr?.map((elem:any)=>{
    return <span key={elem.id} className="episode__characters-span">{elem.name}, </span>
})
  return (
    <div className="episode__characters">Персонажи: {res}</div>
  )
}

export default EpisodesCharacters;