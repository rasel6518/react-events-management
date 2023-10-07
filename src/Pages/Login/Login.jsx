import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";



const Login = () => {
    const { logIn, googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    const handlelogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')


            })
            .catch(err => {
                console.error(err.message)
            })
        e.currentTarget.reset()
    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content w-full ">


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center text-xl font-semibold mt-5">Login your account</h1>
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className="text-center ">
                            <button onClick={handleGoogleLogIn} className="btn ">Google sign</button>
                        </div>
                        <div className=" mb-5 text-center p-3">
                            Do Not Have An Account ? <Link className="text-blue-400 font-medium" to='/register'> Register</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;