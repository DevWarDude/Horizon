import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";
import { useUserProfile } from "../../hooks/useUserProfile";
import supabase from "../../services/supabase";
import { updateProfile } from "../../utils/updateProfile";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";
import PageWrapper from "../PageWrapper";

import ThemeToggleButton from "./ThemeToggleButton";
import ProfilePicture from "./ProfilePicture";
import NameInputs from "./NameInputs";
import CurrencySelector from "./CurrencySelector";
import DeleteAccountButton from "./DeleteAccountButton";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const SettingsForm = () => {
  const { user: routeUser } = useParams();
  const { refetch, profile } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fName: "",
    lName: "",
    currency: "USD",
    userId: "",
    img: "",
  });

  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [initialForm, setInitialForm] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const { data: profileData, isLoading } = useUserProfile(userId);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) toast.error(error.message);
      else if (!user) navigate("/sign-in");
      else {
        setUserId(user.id);
        setEmail(user.email);
      }
    };
    getUser();
  }, [navigate]);

  useEffect(() => {
    if (profileData) {
      const filledForm = {
        fName: profileData.fName,
        lName: profileData.lName,
        currency: profileData.currency,
        userId: profileData.userId,
        img: profileData.img || "",
      };
      setForm(filledForm);
      setInitialForm(filledForm);
    }
  }, [profileData]);

  useEffect(() => {
    document.title = `${profile.fName}'s Settings | Horizon`;
  }, [profile.fName]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const hasChanges = JSON.stringify(form) !== JSON.stringify(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Profile updated");
      queryClient.invalidateQueries({ queryKey: ["user-profile", userId] });
      refetch();
      const updatedName = form.fName.toLowerCase().trim();
      if (routeUser !== updatedName) {
        navigate(`/${updatedName}/settings`, { replace: true });
      }
    },
    onError: () => toast.error("Failed to update profile"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.userId || !hasChanges) return;
    mutation.mutate(form);
  };

  if (isLoading || !profileData?.userId) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-lg dark:text-white animate-pulse gap-2">
        <span>Loading profile...</span>
        <ClipLoader size={15} color="#1D4ED8" />
      </div>
    );
  }

  return (
    <PageWrapper>
      <motion.form
        onSubmit={handleSubmit}
        initial="initial"
        animate="animate"
        variants={fadeUp}
        className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-slate-900 shadow dark:text-slate-100 rounded-xl space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Settings</h2>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>

        <ProfilePicture
          profilePic={profilePic}
          setProfilePic={setProfilePic}
          profile={profile}
          form={form}
          setForm={setForm}
          userId={userId}
        />

        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="mt-1 w-full border rounded px-3 py-2 dark:bg-slate-800 dark:border-slate-700 lowercase bg-white focus:outline-none"
          />
        </div>

        <NameInputs form={form} handleChange={handleChange} />
        <CurrencySelector form={form} handleChange={handleChange} />

        <button
          type="submit"
          disabled={!hasChanges || mutation.isPending}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {mutation.isPending ? "Saving..." : "Save Changes"}
        </button>

        <DeleteAccountButton />
      </motion.form>
    </PageWrapper>
  );
};

export default SettingsForm;
