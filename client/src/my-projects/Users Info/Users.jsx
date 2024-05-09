import axios from 'axios'

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Users(){
  const [users, setUsers] = useState([{
    name: "manav", email: "manav@gmail.com", age: 24
  }])

  //Reading users
  useEffect(()=>{
    axios.get('http://localhost:5000/UsersInfo')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  //Deleting a User
  function handleDelete(id){
    axios.delete('http://localhost:5000/UsersInfo/deleteUser/'+id)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex h-[100vh] bg-blue-500 justify-center items-center">
      <div className="w-[45rem] bg-white flex flex-col gap-5 rounded p-3">
        {/* //Creating a new User */}
        <Link to="/create" className="bg-blue-800 text-white text-center py-1 px-5 rounded-lg">Add +</Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((user)=>{
                return <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td className="flex gap-4 ml-8">
                    <Link to={`/update/${user._id}`} className="bg-green-800 text-white py-1 px-4 rounded-lg">Update</Link>
                    <button
                      to="/delete"
                      onClick={(e) => handleDelete(user._id)}
                      className="bg-red-800 text-white py-1 px-4 rounded-lg">
                        Delete
                    </button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users