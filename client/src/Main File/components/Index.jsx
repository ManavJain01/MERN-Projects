import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

// Importing routing
import { Outlet } from 'react-router-dom'

function Index(){
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Index