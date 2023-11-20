import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { createUserWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const handleGoogleLogin = () =>{
        createUserWithGoogle()
        .then(res=>{
          console.log(res.user)
          const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName}
          axiosPublic.post('/users', userInfo)
          .then(res => console.log(res.data));
          navigate(from, { replace: true })
    
        })
        .catch(error => console.log("error", error))
      }
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn text-xs font-semibold py-2 "
      >
        <span className="text-lg">
          <FcGoogle />
        </span>{" "}
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
