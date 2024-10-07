import { useForm } from "react-hook-form"

import { userService } from "../services"

const UserForm = (props) => {
  const { setUsers } = props

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "email",
      name: "name",
      surname: "surname",
    },
    mode: "all",
  })

  const submit = (obj) => {
    userService.createUser(obj).then(({ data }) => setUsers((users) => [...users, data]))
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" {...register("name", { required: { message: "err", value: true } })} />
      {errors.name && <span>{errors.name.message}</span>}
      <input type="text" {...register("surname")} />
      <input type="text" {...register("email")} />
      <button>Submit</button>
    </form>
  )
}

export { UserForm }
