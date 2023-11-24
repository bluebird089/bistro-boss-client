import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        createUser(data.email, data.password).then((result) => {
            const user = result.user;
            if (user) {
                Swal.fire({
                    title: "Success",
                    text: "Signed Up Successfully",
                    icon: "success",
                });
            }
        });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
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
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Type Your Name"
                                className="input input-bordered"
                            />
                            {errors.name && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                placeholder="Type Your Email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern:
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                })}
                                name="password"
                                placeholder="Type Your Password"
                                className="input input-bordered"
                            />
                            {errors.password?.type === "required" && (
                                <span className="text-red-500">
                                    This field is required
                                </span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-red-500">
                                    Password Must Be 6 Character Long
                                </span>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <span className="text-red-500">
                                    Password Should not have more that 20
                                    Character
                                </span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <span className="text-red-500">
                                    Password must have one lower case, one upper
                                    case, one number, and one special character
                                </span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                        <div className="text-center mt-5">
                            <p>
                                Have An Account? Please{" "}
                                <Link
                                    className="text-yellow-500 hover:underline"
                                    to="/login"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
