import { BiLogOut } from "react-icons/bi";
const LogoutButton = () => {
  return (
    <div className="mt-auto bg-slate-600">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
      {/* <span className="loading loading-spinner"></span> */}
    </div>
  );
};
export default LogoutButton;
