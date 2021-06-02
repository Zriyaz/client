import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios
        .post(`/api/account-activation`, {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("Res", res);
            toast.success(
              "Link sent to on your email, Please go throuth this link!"
            );
            setLoading(false);
          }
        });
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <ToastContainer />
      <h1 className="jumbotron text-center bg-primary ">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            required
            className="form-control mb-4 p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            required
            className="form-control mb-4 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            data-error="Please enter a valid Email Address."
          />
          <input
            type="password"
            placeholder="Enter password"
            required
            className="form-control mb-4 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <h3>Loading</h3> : "Submit"}
          </button>
        </form>
        <p className="text-center">
          already register{" "}
          <Link to="/login">
            <a>Login</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Registration;
