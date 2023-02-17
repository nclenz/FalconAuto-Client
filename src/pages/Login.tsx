import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type LoginFormInput = {
  username: string
  password: string
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>()

  console.log(errors)
  return (
    <div className="flex flex-col items-center justify-center bg-black/70 min-h-screen text-lg p-10 ">
      <div className="w-full max-w-md min-h-max flex flex-col p-10 bg-slate-900 rounded-md -mt-32 hover:border ">
        <form
          className="flex flex-col pb-10 mx-2"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <h2 className="text-white text-2xl font-bold mb-5">
            Employee Access
          </h2>
          <label className="text-white" htmlFor="username">
            Username:
          </label>
          <section>
            <input
              autoComplete="off"
              id="username"
              type="text"
              {...(register("username"), { required: true })}
              placeholder="Username"
              className="rounded-md w-full p-1"
            />
          </section>

          <label className="text-white" htmlFor="password">
            Password:
          </label>
          <section>
            <input
              id="password"
              type="password"
              {...(register("password"), { required: true })}
              placeholder="Password"
              className="rounded-md w-full p-1"
            />
          </section>

          <br />
          <button className="p-2 bg-slate-200 w-full rounded-md" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
