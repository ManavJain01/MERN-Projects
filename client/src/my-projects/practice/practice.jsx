import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

function practice(){
  useEffect(()=>{
    axios.get('http://localhost:5000/practice')
    .then(result => console.log(result))
    .catch(err => console.log(err))

  },[])

  return (
    <div className='flex justify-around items-center'>
      practice
      <Link to={"testing"} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Testing</Link>
    </div>
  )
}

export default practice