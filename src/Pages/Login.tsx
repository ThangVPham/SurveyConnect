import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login-SignUp/LoginForm";
import { useEffect } from "react";
interface ILogin {
  setLogIn: () => void;
}
function Login({ setLogIn }: ILogin) {
  const navigate = useNavigate();
  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      navigate("/dashboard");
    }
  });
  return (
    <div className="h-screen w-full justify-center items-center bg-gradient-to-r from-[#1D6777] via-[#218E61] to-[#13885D] dark:bg-gradient-to-tr dark:from-[#172A46] dark:via-[#0F2746] dark:to-[#11386E]">
      <LoginForm setLogIn={setLogIn}></LoginForm>
    </div>
  );
}

export default Login;
