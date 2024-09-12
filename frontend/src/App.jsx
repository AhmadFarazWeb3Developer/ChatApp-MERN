import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
const App = () => {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        {/* <Login /> */}
        {/* <Signup /> */}
        <Home />
      </div>
    </>
  );
};

export default App;
