import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then(cred => {
    console.log('user created:', cred.user)
    
  })
  .catch(err => {
    console.log(err.message)
  })
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DanaVerse</h3>
          <span className="loginDesc">
          Explore the Universe and Eveything in Between at DanaVerse
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          {error ? <div>{error}</div> : null}
            <input placeholder="Email" onChange={(event) => {
            setEmail(event.target.value);
          }}className="loginInput" />
            <input placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }} className="loginInput" />
            <button onClick={handleSubmit} className="loginButton">Sign Up</button>
          
            <p>
              already registered? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}