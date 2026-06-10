import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

useEffect(() => {
  const verifyCookie = async () => {
    if (!cookies.token) {
      navigate("/login");
    }
    const { data } = await axios.post(
      `${API_URL}/support`,
      {},
      { withCredentials: true },
    );
    const { status, user } = data;
    setUsername(user);
    return status
      ? toast(`Hello ${user}`, {
          position: "top-right",
        })
      : (removeCookie("token"), navigate("/login"));
  };
  verifyCookie();
}, [cookies, navigate, removeCookie]);

function SupportPage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  return (
    <>
      <Hero />
      <CreateTicket />
    </>
  );
}

export default SupportPage;
