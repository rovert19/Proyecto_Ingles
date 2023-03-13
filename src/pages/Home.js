import { NavBar } from "../components/NavBar";
import { useAuth } from "../context/authContext";
import { Routes, Route , Outlet } from "react-router-dom";
import "./Home.css";
import {useParams} from "react-router-dom"; 

export const Home = () => {
  const { user, logout, loading } = useAuth();

  // const {id}= useParams();
  // console.log(id);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="home">
      <div className="home-container">

        <div className="navbar-section">
          <NavBar />
        </div>
        
        <div className="main-section">
          <Outlet/>
          <button className="btn-logout" onClick={handleLogout}>
              Logout
          </button>
        </div>
      </div>
    </div>
  );
};
