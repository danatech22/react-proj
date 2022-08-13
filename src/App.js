import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Register from "./pages/register/Register"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  


  const authRoute = isLoggedIn ? (
    <Routes>
      <Route exact path="/" element={<Home />}/>  
      <Route exact path="/user" element={ <List />} />
      <Route exact path="/user/:userId" element={ <Single />} />
      <Route exact path="new" element={<New />} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>

  ): (
    <Routes>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/login" element={<Login />}/>
      <Route path="*" element={<Navigate to="/login" />}/>
    </Routes>
    

  )

  useEffect(()=>{
    const user = localStorage.getItem('user');
    if(user){
      dispatch({ type:"LOGIN"});
    }
  },[])


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        {authRoute}
      </BrowserRouter>
    </div>
  );
}

export default App;
