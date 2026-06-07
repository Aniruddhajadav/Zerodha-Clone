import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api"; // Your configured axios instance

export default function Logout({ setAuthUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await api.post("/logout");
        if (typeof setAuthUser === "function") {
          setAuthUser(null);
        }
        navigate("/");
      } catch (error) {
        console.error("Logout error:", error);
        navigate("/");
      }
    };

    performLogout();
  }, [navigate, setAuthUser]);

  return <div>Logging out...</div>;
}
