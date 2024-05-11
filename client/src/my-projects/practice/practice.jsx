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
    <div className='h-[58vh] flex flex-col justify-center'>
      <div className='flex justify-around items-center'>
        <Link to={""} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Practice</Link>
        <Link to={"testing"} className='bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-800'>Testing</Link>
      </div>

      <div className='flex justify-center items-center m-20 text-2xl'>
        This Page is requesting to server at /practice
      </div>
    </div>
  )
}

export default practice