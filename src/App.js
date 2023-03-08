import "./App.css";
// import { Logo } from "./components/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<p>Page not found</p>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
