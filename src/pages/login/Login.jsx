import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch  = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user; 
        console.log("user login:", user);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type:"LOGIN"})
      })
      .catch((error) => {
        console.log(error.msg)
        setError(true);
      });
  };
  return (
    <div className="login">
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <Link to="/register">Register</Link>
      {error && <span>Wrong email or password!</span>}
    </form>
  </div>
  )
}
export default Login;