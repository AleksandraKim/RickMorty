import { useEffect,useState } from "react";

interface FetchType<T>{
    data:T|null;
    isLoading:boolean;
    error:string|null;
}

function useFetch<T>(url:string):FetchType<T>{
const[data,setData]=useState<T|null>(null);
const[isLoading,setIsLoading]=useState<boolean>(true);
const[error,setError]=useState<string|null>(null);

useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response=await fetch(url);
            if(!response){
                throw new Error ('Network response was not ok');}
            const result=await response.json();
            setData(result.results);
        }catch(error:unknown){
            if(error instanceof Error){
            setError(error.message);}
            else{
                console.log('Произошла неизветсная ошибка');
            }
        }finally{
            setIsLoading(false);
        }  
    }
    fetchData();
},[url])
return ({data,isLoading,error})} 

export default useFetch;