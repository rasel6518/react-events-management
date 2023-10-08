import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


const Register = () => {
    const { CreateUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photourl = form.get('photourl')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photourl, email, password)
        CreateUser(email, password)
            .then(result => {
                const SignUpUser = result.user;

                updateProfile(result.user,
                    {
                        displayName: name,
                        photoURL: photourl
                    })
                    .then(() => console.log("Update Profile"))
                    .catch(err => console.log(err.message))

                navigate('/login');
            })
            .catch(err => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode, errorMessage);
            })

        e.currentTarget.reset()
        toast('Register  Successful');

    }
    return (
        <div>
            <div className="hero w-full min-h-screen bg-base-200">

                <div className="hero-content w-full ">


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center text-xl font-semibold mt-5">Register your account</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photourl" placeholder="Enter Photo URL" className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  hover:bg-gray-700 bg-black text-white">Register</button>
                            </div>
                        </form>
                        <div className=" mb-5 text-center p-3">
                            Do  Have An Account ? <Link className="text-blue-400 font-medium" to='/login'> Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light">

            </ToastContainer>
        </div>
    );
};

export default Register;