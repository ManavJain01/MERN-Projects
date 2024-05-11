import { useEffect } from 'react'

import axios from 'axios'


function testing(){
  useEffect(()=>{
    axios.get('http://localhost:5000/practice/testing')
    .then(result => console.log(result))
    .catch(err => console.log(err))

  },[])

  return (
    <div>testing</div>
  )
}

export default testing