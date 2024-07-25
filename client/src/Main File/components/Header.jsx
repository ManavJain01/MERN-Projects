import { Link } from 'react-router-dom'

function Header(){
  return(
    <div className="h-[20vh] bg-[linear-gradient(#b0c3f3,rgba(196,196,196,0))] text-blue-600 flex flex-col justify-center gap-5">
      <div className='relative'>
        <h1 className="font-bold text-5xl text-center">My MERN Projects</h1>

        <img src="https://media.tenor.com/9rQ7EAiTHkIAAAAi/baymax-dance-big-hero-6.gif" alt="gif" className="absolute -top-16 right-32" />
      </div>
      <nav className="mx-5 text-xl font-semibold">
        <ul className="flex justify-end gap-5">
          <li className="hover:text-blue-900 p-2 rounded-lg shadow-clayMorphism"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-900 p-2 rounded-lg shadow-clayMorphism"><Link to="/practice">Practice</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header