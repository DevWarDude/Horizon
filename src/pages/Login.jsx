import { Link } from "react-router";

function Login() {
  return (
    <div className="flex font-jost justify-center flex-col h-[100vh] mx-6">
      <header className="flex flex-col ">
        <div className="flex items-center gap-1">
          <img src="logo.svg" alt="" />
          <h1 className="font-semibold  text-2xl font-serif">Horizon</h1>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-2xl font-semibold text-slate-700">Sign in</p>
          <span className="opacity-70  tracking-wide text-lg placeholder:text-gray-500">
            Please enter your details
          </span>
        </div>
      </header>
      <form action="" className="mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-lg opacity-75 placeholder:text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="1"
            placeholder="Enter your email"
            className="border-[1px] border-gray-300 px-3 py-3 placeholder:text-gray-400 placeholder:text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-lg opacity-75 placeholder:text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="2"
            placeholder="Enter your password"
            className="border-[1px] border-gray-300 px-3 py-3 placeholder:text-lg rounded-lg placeholder:text-gray-400"
          />
        </div>
        <button className="bg-blue-500 text-white font-semibold text-lg rounded-lg p-2 tracking-wide">
          Sign in
        </button>
      </form>
      <p className="text-center mt-5 text-gray-600 flex justify-center items-center gap-1">
        <p>Don't have an account? </p>

        <Link to={"/sign-up"}>
          <span className="text-[#4893ff] opacity-100">Sign up</span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
