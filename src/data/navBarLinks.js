import { CiHome, CiMoneyBill } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";
import { GoHistory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

export const navBarLinks = [
  {
    label: "Dashboard",
    icon: CiHome,
    path: "Dashboard",
  },

  {
    label: "Connect Bank",
    icon: CiBank,
    path: "connect-bank",
  },

  {
    label: "Transfer Funds",
    icon: GrTransaction,
    path: "transfer-funds",
  },
  {
    label: "Transaction History",
    icon: GoHistory,
    path: "transaction-history",
  },
  {
    label: "Loan",
    icon: CiMoneyBill,
    path: "loan",
  },
  {
    label: "Settings",
    icon: IoSettingsOutline,
    path: "settings",
  },
];
