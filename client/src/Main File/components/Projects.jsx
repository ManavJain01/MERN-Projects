import {Link} from 'react-router-dom'
import object from './Objects'

import './Projects.css'

function Projects(){
  let i = 1

  return(
    <div className='flex flex-wrap'>
      {object.map((value) =>(
        <Link key={i} to={value.Link} id={value.id} className="m-5 hover:scale-110 duration-300">
          <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center justify-between rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-green-600">
            <h1 className="text-6xl mb-4">Project {i++}</h1>
            <img src={value.Img} className={`object-contain rounded-sm`}></img>
            <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
              <span className="shadow-xl px-10 whitespace-nowrap">{value.p1}</span>
              <span className="shadow-xl px-10 whitespace-nowrap">{value.p2}</span>
            </p>
          </div>
        </Link>))
      }

      <Link className="m-5 hover:scale-110 duration-300 active:translate-x-4">
        <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center justify-between rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-red-600">
          <h1 className="text-6xl mb-4">Project {i}</h1>
          <p className="text-3xl whitespace-nowrap hover:translate-y-2 active:translate-y-4">Work in progress</p>
          <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
            <span className="shadow-xl px-10 whitespace-nowrap">Project Name</span>
            <span className="shadow-xl px-10 whitespace-nowrap">Topic Name</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Projects