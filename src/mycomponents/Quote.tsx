import React from 'react'
import { useState,useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
function Quote() {
    const [Quote , setQuote] = useState("");
    const [Author, setAuthor] = useState("");

const api_url:string = "https://api.quotable.io/random";
useEffect(()=>{
async function getQuote(url:string){
const response = await fetch(url);
var data = await response.json();
setQuote(data.content)
setAuthor(data.author)

localStorage.setItem('quote', data.content);
localStorage.setItem('author' , data.author);
localStorage.setItem('timestamp', new Date().toString());
}

const storedQuote = localStorage.getItem('quote');
const storedAuthor = localStorage.getItem('author');
const storedTimeStamp = localStorage.getItem('timestamp');

if(storedQuote && storedAuthor && storedTimeStamp){
    const currentTime = new Date();
    const quoteTime = new Date(storedTimeStamp);
    const hoursDifference = Math.abs(currentTime.getTime()-quoteTime.getTime())/36e5;


    if (hoursDifference <24){
        setAuthor(storedAuthor);
        setQuote(storedQuote);
        return;
    }
}


getQuote(api_url)
}, []);
  return (
<div className={twMerge('flex-col bg-zinc-800 text-white w-1/2 h-full')}>
<h1 className={twMerge('text-6xl font-medium text-left my-16 ml-28')}>Quote of the day</h1>
<h1 className={twMerge('w-96 font-medium text-3xl ml-40 ')} >{`"${Quote}"`}</h1>
<p className={twMerge(' font-medium text-2xl ml-96 my-16')}>{`author- "${Author}"`}</p>
</div>  )
}

export default Quote