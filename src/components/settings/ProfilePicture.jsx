import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import supabase from "../../services/supabase";
import { formatDate } from "../../utils/formatDate";
import { UserIcon } from "@heroicons/react/24/outline";

const ProfilePicture = ({
  profilePic,
  setProfilePic,
  profile,
  setForm,
  userId,
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handlePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !userId) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG or PNG images are allowed");
      return;
    }

    if (file.size > 1024 * 1024) {
      toast.error("Image must be less than 1MB");
      return;
    }

    const fileExt = file.name.split(".").pop();
    const filePath = `avartar/${userId}-${Date.now()}.${fileExt}`;

    setUploadProgress(30);

    const { error: uploadError } = await supabase.storage
      .from("avartar")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      toast.error("Upload failed: " + uploadError.message);
      return;
    }

    const { data } = supabase.storage.from("avartar").getPublicUrl(filePath);
    const publicURL = data?.publicUrl;

    if (publicURL) {
      setProfilePic(publicURL);
      setForm((prev) => ({ ...prev, img: publicURL }));
      setUploadProgress(100);
      toast.success("Image uploaded successfully");
    }
  };

  return (
    <div className="flex gap-6 items-center flex-wrap sm:flex-nowrap">
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          {profilePic || profile.img ? (
            <img
              src={profilePic || profile.img}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <UserIcon className="w-full h-full text-slate-500 p-2" />
          )}
        </div>
        {!profile.img && (
          <label className="cursor-pointer text-sm bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700">
            Upload Picture
            <input
              type="file"
              accept="image/*"
              onChange={handlePicChange}
              className="hidden"
            />
          </label>
        )}

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-slate-300">
        <div className="flex gap-3 md:gap5 items-center sm:text-base">
          <strong>Country:</strong> <span>{profile?.country || "—"}</span>
        </div>
        <div className="flex gap-3 md:gap5 items-center sm:text-base">
          <strong>City:</strong> <span>{profile?.city || "—"}</span>
        </div>
        <div className="flex gap-3 md:gap5 items-center sm:text-base">
          {console.log(profile)}
          <strong>Date of Birth:</strong>{" "}
          <span>{formatDate(profile?.dob?.slice(0, 10)) || "—"}</span>
        </div>
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  profilePic: PropTypes.string,
  setProfilePic: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    img: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    dob: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    img: PropTypes.string,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ProfilePicture;
