import { useNavigate } from "react-router-dom";
import SignupForm from "../components/Login-SignUp/SignupForm";
import { useEffect } from "react";
interface ISignup {
  setLogIn: () => void;
}
function Signup({ setLogIn }: ISignup) {
  const navigate = useNavigate();
  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    if (loginToken) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div>
      <SignupForm setLogIn={setLogIn}></SignupForm>
    </div>
  );
}

export default Signup;
