import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await axios.post(`/api/register`, {
        email,
      });
      // toast.success("Registration successful, Please login!");
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
      // toast.error(error.response.data);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary ">Reset your Password</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            disabled={!email || loading}
          >
            {loading ? <h3>Loading</h3> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
