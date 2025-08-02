import { lazy } from "react";
import { Link } from "react-router-dom";

const SignUpForm = lazy(() => import("./components/SignUpForm"));

export default function SignUp() {
  return (
    <div className="font-jost px-4 py-10 sm:px-6 md:px-[10%] lg:px-[15%] max-w-5xl mx-auto bg-white dark:bg-slate-950 text-slate-800 dark:text-stone-50 transition-colors">
      <header className="mb-8">
        <div className="flex items-center gap-2">
          <img src="logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl lg:text-3xl font-serif font-semibold">
            Horizon
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-2xl font-semibold">Sign Up</p>
          <span className="text-gray-500 dark:text-gray-400 tracking-wide text-base">
            Please enter your details
          </span>
        </div>
      </header>

      <SignUpForm />

      <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          to="/sign-in"
          className="text-[#4893ff] dark:text-blue-400 font-medium hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
