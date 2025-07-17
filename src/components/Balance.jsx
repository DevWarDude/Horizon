import { Plus } from "lucide-react";
import { useUser } from "../context/UserContext";
import { useParams, Link } from "react-router";
import { ClipLoader } from "react-spinners";
import { useExchangeRate } from "../hooks/useExchangeRate";
import { getCurrencySymbol, formatAmount } from "../utils/currency";

function Balance() {
  const { profile, isLoading: profileLoading } = useUser();
  const { user: routeUser } = useParams();

  const currency = profile?.currency || "USD";
  const balance = profile?.balance || 0;

  const { data: rate, isLoading: rateLoading } = useExchangeRate(currency);

  const convertedBalance = formatAmount(balance * (rate || 1));
  const symbol = getCurrencySymbol(currency);

  console.log(profile);

  if (profileLoading || rateLoading) {
    return (
      <div className="mt-10 text-center flex justify-center items-center gap-2">
        <span>Loading balance</span>
        <ClipLoader size={12} color="#3B82F6" />
      </div>
    );
  }

  return (
    <div className="border px-2 py-4 rounded-lg flex justify-between items-end bg-white shadow-sm dark:bg-slate-900">
      <div className="flex gap-2 items-center">
        <div className="bg-blue-200 h-[70px] w-[70px] rounded-full flex items-center justify-center dark:bg-slate-100">
          <div className="bg-white dark:bg-slate-900 h-12 w-12 rounded-full"></div>
        </div>
        <div className="flex gap-1 flex-col">
          <p className="font-semibold">No Bank account linked</p>
          <span>Total Current Balance</span>
          <h1 className="font-bold text-lg">
            {symbol}
            {convertedBalance}
          </h1>
        </div>
      </div>
      <div className="text-sky-500 flex items-center gap-1">
        <Plus size={20} />
        <Link to={`/${routeUser}/connect-bank`}>Add Funds</Link>
      </div>
    </div>
  );
}

export default Balance;
