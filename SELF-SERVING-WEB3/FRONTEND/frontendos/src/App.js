import './App.css';
import React, {useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [qoute, setQoute] = useState()
  const [qouteAuthor, setQouteAuthor] = useState()
  const [qouteString, setQouteString] = useState()
  const [submit, setSubmit] = useState()

  useEffect(() => {
    axios.get('http://localhost:5050/quote')
    .then((res)=>{
      setQoute(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [submit])

const handleSubmit = async () => {
  try{
    const res =await axios.post('http://localhost:5050/quote',{
      "author" : qouteAuthor,
      "quote" : qouteString
    });
    setSubmit(res);
  }
  catch{
    alert("Something went wrong")
  }
}

  return (
    <div className='App'>
      <div className='Title'><h2>Today's quotes are :-</h2></div> 
      <br></br>
      {qoute && qoute.map((item)=> (<div className='QOUTES'><div className='Extra'>Quote:</div> <div className='Text'>{item.quote} by {item.author}</div></div>))}
      <div>
        <div className='Input'><h1>If you want to add your quote.</h1></div>
        <div>
          <br></br>
          <label className='YName'>Your Name : </label> 
          <input className='Box1' onChange={(e)=>(setQouteAuthor(e.target.value))}/>
        </div>
        <div>
          <label className='YQuote'>Your Quote : </label>
          <input className='Box2' onChange={(e)=>(setQouteString(e.target.value))}/>
        </div>
        <button className='Generator' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App;
