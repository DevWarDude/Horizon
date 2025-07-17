import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  UserIcon,
  MoonIcon,
  SunIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import supabase from "../services/supabase";
import { updateProfile } from "../utils/updateProfile";
import { useUserProfile } from "../hooks/useUserProfile";
import { ClipLoader } from "react-spinners";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UserIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import supabase from "../services/supabase";
import { updateProfile } from "../utils/updateProfile";
import { useUserProfile } from "../hooks/useUserProfile";
import { ClipLoader } from "react-spinners";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";

import PageWrapper from "../components/PageWrapper";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Settings = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user: routeUser } = useParams();
  const { refetch, profile } = useUser();

  const [profilePic, setProfilePic] = useState(null);
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    currency: "USD",
    userId: "",
    img: "",
  });
  const [initialForm, setInitialForm] = useState(null);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        if (error.message === "Failed to fetch") {
          toast.error("Poor internet connection");
        } else {
          toast.error(error.message);
        }
      } else if (!user) {
        toast.error("Session expired. Please sign in.");
        return navigate("/sign-in");
      }

      setUserId(user.id);
      setEmail(user.email);
    };

    getUser();
  }, [navigate]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const { data: profileData, isLoading } = useUserProfile(userId);

  useEffect(() => {
    if (profileData) {
      const filledForm = {
        fName: profileData.fName,
        lName: profileData.lName,
        currency: profileData.currency,
        userId: profileData.userId,
      };
      setForm(filledForm);
      setInitialForm(filledForm);
    }
  }, [profileData]);

  const hasChanges = JSON.stringify(form) !== JSON.stringify(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !userId) return;

    const fileExt = file.name.split(".").pop();
    const filePath = `avartar/${userId}-${Date.now()}.${fileExt}`;

    const { error: uploadError, data: upData } = await supabase.storage
      .from("avartar")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      toast.error("Failed to upload image: " + uploadError.message);
      return;
    }

    const { data } = supabase.storage.from("avartar").getPublicUrl(filePath);
    const publicURL = data?.publicUrl;

    if (publicURL) {
      setProfilePic(publicURL);
      setForm((prev) => ({ ...prev, img: publicURL }));
    }
  };

  const handleDeleteAccount = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error deleting account");
      return;
    }
    toast.success("Account deleted!");
    navigate("/sign-in");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form?.userId || !hasChanges) return;
    mutation.mutate({
      userId: form.userId,
      fName: form.fName,
      lName: form.lName,
      currency: form.currency,
      img: form.img,
    });
  };

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Profile updated");
      queryClient.invalidateQueries({ queryKey: ["user-profile", userId] });
      refetch();

      const updatedFirstName = form.fName.toLowerCase().trim();
      if (routeUser !== updatedFirstName) {
        navigate(`/${updatedFirstName}/settings`, { replace: true });
      }
    },
    onError: () => toast.error("Failed to update profile"),
  });

  if (isLoading || !profileData?.userId) {
    return (
      <div className="text-center flex items-center justify-center h-[80vh] text-lg dark:text-white animate-pulse gap-2">
        <span>Loading profile</span>
        <ClipLoader size={15} color="#1D4ED8" />
      </div>
    );
  }

  return (
    <>
      <PageWrapper>
        <motion.form
          onSubmit={handleSubmit}
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto mt-10 p-4 sm:p-6 bg-white dark:bg-slate-900 shadow rounded-xl space-y-6 font-sans text-gray-800 dark:text-slate-100"
        >
          <motion.div variants={fadeUp}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Settings</h2>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 text-sm px-3 py-1 rounded-md border dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {theme === "dark" ? (
                  <>
                    <SunIcon className="h-4 w-4 text-yellow-500" /> Light Mode
                  </>
                ) : (
                  <>
                    <MoonIcon className="h-4 w-4 text-gray-600" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                {profilePic || profile.img ? (
                  <img
                    src={profilePic ? profilePic : profile.img}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserIcon className="w-8 h-8 text-slate-600 dark:text-slate-300" />
                )}
              </div>
              <label className="cursor-pointer bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded text-sm hover:bg-gray-200 dark:hover:bg-slate-700">
                {profilePic && "Upload image"}
                {profile.img && "Change picture"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePicChange}
                  className="hidden"
                />
              </label>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              value={email}
              readOnly
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:border-slate-700 tolowercase"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm">Last Name</label>
              <input
                type="text"
                name="lName"
                value={form.lName}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:border-slate-700 capitalize"
              />
            </div>
            <div>
              <label className="block text-sm">First Name</label>
              <input
                type="text"
                name="fName"
                value={form.fName}
                onChange={handleChange}
                className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:border-slate-700 capitalize"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="block text-sm">Currency</label>
            <select
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:border-slate-700"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="NGN">NGN - Naira</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - Pound</option>
              <option value="JPY">JPY - Yen</option>
            </select>
          </motion.div>

          <button
            type="submit"
            disabled={!hasChanges || mutation.isPending}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {mutation.isPending ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>

          <motion.div
            variants={fadeUp}
            className="pt-4 border-t border-gray-200 dark:border-slate-700 text-right"
          >
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="text-red-600 font-medium hover:underline"
            >
              Delete Account
            </button>
          </motion.div>
        </motion.form>
      </PageWrapper>
    </>
  );
};

export default Settings;
