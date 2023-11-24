import { useContext, useEffect, useState } from "react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const [disabled, setDisabled] = useState(true);
    const { createUser } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password).then((result) => {
            const user = result.user;
            console.log(user);
        });
    };

    const handleValidateCaptcha = (e) => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Type Your Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"
                                onBlur={handleValidateCaptcha}
                                name="captcha"
                                placeholder="Type CAPTCHA"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                disabled={disabled}
                                className="btn"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
