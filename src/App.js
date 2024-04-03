import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Explore from './pages/Explore';
import Account from './pages/Account';
import AccountSet from './pages/AccountSet';
import AddCar from './pages/AddCar';
import axios from "axios";
import { UidContext } from "./UseContext";
import CarDetail from './pages/CarDetail';
import Bookings from './pages/Bookings';
import Error from './pages/Error';
import CarSet from './pages/CarSet';


function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUid(null);
        return;
      }

      try {
        const response = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API_URL}authenticated`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUid(response.data.userId);
      } catch (err) {
        console.log("Token invalide");
        setUid(null);
      }
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
        <Route path="/accountsetting" element={<AccountSet />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/cardetail/:id" element={<CarDetail />} />
        <Route path="/bookings/" element={<Bookings />} />
        <Route path="/carset/:id" element={<CarSet />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </UidContext.Provider>
  );
}

export default App;
