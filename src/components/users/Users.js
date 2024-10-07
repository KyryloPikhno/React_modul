import { useEffect, useState } from "react"

import { userService } from "../services"
import { User } from "../user/User"
import { UserForm } from "../userForm/UserForm"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAll().then(({ data }) => setUsers(data))
  }, [])

  return (
    <div>
      <div>
        <UserForm setUsers={setUsers} />
      </div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  )
}

export { Users }
