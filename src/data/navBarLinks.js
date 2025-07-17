import { CiHome, CiMoneyBill } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
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
