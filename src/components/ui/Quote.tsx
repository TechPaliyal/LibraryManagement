import React from 'react'
import { useState , useEffect } from 'react';

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
}
getQuote(api_url)
}, []);


  return (
    <div>
        <h1 id='line1'>Quote of the day</h1>
    <h1 id='line2'>{`"${Quote}"`}</h1>
    <p id='line3'>{`author- "${Author}"`}</p>
    </div>
  )
}

export default Quote