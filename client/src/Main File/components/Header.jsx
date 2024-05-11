import { Link } from 'react-router-dom'

function Header(){
  return(
    <div className="h-[20vh] bg-slate-300 flex flex-col justify-center gap-10">
      <h1 className="font-bold text-2xl text-center mt-5">My MERN Projects</h1>
      <nav className="mx-5 text-blue-600 text-xl font-semibold">
        <ul className="flex justify-end gap-5">
          <li className="hover:text-blue-900"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-900"><Link to="/practice">Practice</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header