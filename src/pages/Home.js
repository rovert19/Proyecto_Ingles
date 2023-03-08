import { Logo } from "../components/Logo";
import { useAuth } from "../context/authContext";
import './Home.css'

export const Home = () => {

  const { user,logout ,loading } = useAuth();

  const handleLogout= async()=>{
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };


  if(loading){
    return (
      <h1>Loading</h1>
    );
  }

  return (
    <div className="home">
      <Logo />
      <h1>Home Page</h1>
      <p>Welcome {user.displayName || user.email }</p>
      <p><strong>Falta xD</strong></p>
      <button className="btn-logout" onClick={handleLogout}>Logout</button>
    </div>
  );

};
