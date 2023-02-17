import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-900 border-b border-white pt-2 sticky">
      <>
        <div className="flex h-16 justify-between">
          <Link
            to="/"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-3xl font-medium text-white hover:border-white hover:text-slate-200 "
          >
            <a href="/">Welcome to Falcon Auto</a>
          </Link>

          <div className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-medium text-white hover:border-white hover:text-slate-200 mr-28">
            {/*If admin sign in, show elements else show null */}
            <a onClick={() => navigate("/login")}>Employee Login</a>
            {/* {auth.data?.username ? <NavElements /> : null} */}
          </div>
        </div>
      </>
    </div>
  )
}

export default Navbar
