import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    // signIn user
    signInUser(email, password)
    .then((result) => {
        console.log(result.user)
    })
    .catch((error) => {
        console.log("ERROR", error)
    })
  };

  return (
    <div className="px-[136px] mt-[88px]">
        <Helmet>
            <title>Login | Auth Private Route</title>
        </Helmet>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col py-20">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-[460px] shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="px-10 pb-8">
              New to this website? Please{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
