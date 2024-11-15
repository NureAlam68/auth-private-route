import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // const name = e.target.name.value;

        // create user
        createUser(email, password)
        .then((result) => {
            console.log(result.user)

            // reset input when register done
            e.target.reset();

            // go to home when register done
            navigate("/")
        })
        .catch((error) => {
            console.log("ERROR", error)
        })
    }

    return (
        <div className="px-[136px] mt-[88px]">
            <Helmet>
                <title>Register | Auth Private Route</title>
            </Helmet>
            <div className="hero bg-base-200">
        <div className="hero-content flex-col py-20">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register Now!</h1>
          </div>
          <div className="card bg-base-100 w-[460px] shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="px-10 pb-8">
              Already have an account? Please{" "}
              <Link to="/login" className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;