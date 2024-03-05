import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Explore from './pages/Explore';
import Account from './pages/Account';
import axios from "axios";
import { UidContext } from "./UseContext";


function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `http://localhost:5000/authenticated`,
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data.userId);
          console.log(res.data.userId)
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

  }, []);

  return (
    <UidContext.Provider value={uid}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/account" element={<Account />} />
    </Routes>
    </UidContext.Provider>
  );
}

export default App;
