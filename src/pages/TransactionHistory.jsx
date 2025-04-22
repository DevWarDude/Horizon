import {
  CreditCard,
  DollarSign,
  Package,
  PencilLine,
  Plus,
  Star,
  Trash,
  TrendingUp,
  Users,
} from "lucide-react";
import { recentSalesData } from "../data/recentSalesData";
import { topProducts } from "../data/topProducts";
import Balance from "../components/Balance";

function TransactionHistory() {
  return (
    <div className="font-jost text-slate-600">
      <Balance />

      <div className="card">
        <div className="card-header">
          <p className="card-title text-xl">Transaction History</p>
        </div>
        <div className="card-body p-0">
          <div className="relative h-fit w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin] ">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row text-blue-400 tracking-wide ">
                  <th className="table-head font-medium">Name</th>
                  <th className="table-head font-medium">Date</th>
                  <th className="table-head font-medium">Amount</th>
                  <th className="table-head font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {topProducts.map((product) => (
                  <tr key={product.id} className="table-row">
                    <td className="table-cell font-semibold text-gray-400 text-xl ">
                      {product.name}
                    </td>
                    <td className="table-cell">
                      <div className="flex w-max gap-x-4">
                        <div className="flex flex-col">
                          <p>{product.date}</p>
                          <p className="text-sm text-gray-500">
                            {product.time || "04:44 AM"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-cell font-light tracking-wide">
                      ${product.amount}
                    </td>
                    <td
                      className={`table-cell ${
                        product.status === "Deposited"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {product.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
