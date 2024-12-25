import React from "react";

const SettingsPage = () => {
  return (
    <>
      <div className=" flex items-center h-screen  container mx-auto px-4 pt-20 max-w-5xl"></div>
      <div className=" space-y-6">
        <div className=" flex flex-col gap-1">
          <h2 className=" text-lg font-semibold">Themes </h2>
          <p className=" text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
