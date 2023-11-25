import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogIn } = useAuth();
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.form?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogIn().then((res) => {
            const user = res.user;
            console.log(user);
            if (user) {
                Swal.fire({
                    title: "Success",
                    text: "Logged In Successfully",
                    icon: "success",
                });
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                };
                axiosPublic.post("/users", userInfo).then((res) => {
                    console.log(res.data);
                });
                navigate(from, { replace: true });
            }
        });
    };

    return (
        <div>
            <span onClick={handleGoogleLogin} className="btn w-full">
                <FcGoogle></FcGoogle>
                Google
            </span>
        </div>
    );
};

export default SocialLogin;
