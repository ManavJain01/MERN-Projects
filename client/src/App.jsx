// No Use of this jsx file

// Importing React Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing Main Files
import MainPage from './Main File/components/Index'

// My Projects Imports-----------------------------------------------------------
// Importing Users Info Files
import UsersInfo from './my-projects/Users Info/Users'
import CreateUser from './my-projects/Users Info/CreateUser'
import UpdateUser from './my-projects/Users Info/UpdateUser'

// Importing Student Details Files
import StudentDetails from './my-projects/Student Details/StudentDetails'


// Importing practice
import Practice from './my-projects/practice/practice'
import Testing from './my-projects/practice/testing'

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

        {/* Student Details */}
        <Route path='/StudentDetails' element={<StudentDetails />}></Route>

        {/* practice */}
        <Route path='/practice' element={<Practice />}></Route>
        <Route path='/practice/testing' element={<Testing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
