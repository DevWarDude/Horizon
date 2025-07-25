import { useAuth } from "../context/AuthContext";
import Balance from "./Balance";

function Layout() {
  const { profile } = useAuth();

  return (
    <div className="flex flex-col gap-6 dark:text-slate-200 text-slate-800 mb-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl font-sans ">
          Welcome,{" "}
          <span className="text-blue-500 capitalize">{profile?.fName}</span>
        </h1>
        <p>Access & manage your account and transaction efficiently</p>
      </div>
      <Balance />
    </div>
  );
}

export default Layout;
