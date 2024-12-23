import React from "react";
import useAuthStore from "../store/useAuthStore";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const handleImageUpload = async () => {};
  return (
    <>
      <div className="h-screen pt-20">
        <div className=" max-2xl: mx-auto p-4 py-8">
          <div className=" bg-base-300 rounded-xl p-6 space-y-8">
            <div className=" text-center">
              <h1 className=" text-2xl font-semibold">Profile</h1>
              <p className=" mt-2"> Your Profile Information</p>
            </div>
            {/* Avatar upload section */}
            <div className=" flex flex-col items-center gap-4">
              <div className=" relative">
                <img
                  src="/avatar.png"
                  alt="Profile"
                  className=" size-32 rounded-full object-cover border-4"
                />
                <label htmlFor="" className=""></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
