// Importing React Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// IMporting Main Files
import MainPage from './Main File/components/Index'

// My Projects Imports-----------------------------------------------------------
// Importing Users Info Files
import UsersInfo from './my-projects/Users Info/Users'
import CreateUser from './my-projects/Users Info/CreateUser'
import UpdateUser from './my-projects/Users Info/UpdateUser'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Files */}
        <Route path='/' element={<MainPage />}></Route>

        {/* Users Info */}
        <Route path='/UsersInfo' element={<UsersInfo />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
