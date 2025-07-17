import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { BeatLoader } from "react-spinners";
import FormInput from "../components/FormInput";
// import FormInput from "../components/FormInput";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data) => login(data);

  return (
    <div className="flex justify-center flex-col h-screen font-jost px-4 py-10 sm:px-[15%] md:px-[24%] lg:px-[20%] max-w-5xl mx-auto bg-white text-slate-800 dark:bg-slate-950 dark:text-stone-50 md:pb-20">
      <header className="flex flex-col md:mt-24">
        <div className="flex items-center gap-1">
          <img src="logo.svg" alt="Logo" />
          <h1 className="font-semibold text-2xl font-serif">Horizon</h1>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-2xl font-semibold">Sign in</p>
          <span className="opacity-70 tracking-wide text-lg text-gray-500 dark:text-gray-400">
            Please enter your details
          </span>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col gap-5"
      >
        <FormInput
          label="Email"
          type="email"
          name="email"
          register={register}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Enter a valid email",
            },
          }}
          error={errors}
          placeholder="Enter your email"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          error={errors}
          placeholder="Enter your password"
        />

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white font-semibold text-lg rounded-lg p-2 tracking-wide md:py-3 md:mt-2 md:text-lg hover:bg-blue-600 transition"
        >
          {isPending ? (
            <div className="flex gap-2 items-center justify-center">
              <p>Signing In</p>
              <BeatLoader color="#fff" size={12} />
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <p className="text-center mt-5 text-gray-600 dark:text-gray-400">
        Don’t have an account?{" "}
        <Link
          to="/sign-up"
          className="text-[#4893ff] dark:text-blue-400 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
