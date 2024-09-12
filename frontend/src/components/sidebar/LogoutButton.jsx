import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../hooks/useLogout";
const LogoutButton = () => {
  const { logout, loading } = useLogout();
  return (
    <div className="mt-auto bg-slate-900 rounded-sm p-1">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
