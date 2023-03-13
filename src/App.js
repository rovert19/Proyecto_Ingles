import "./App.css";
// import { Logo } from "./components/Logo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { HomeSection } from "./pages/sections/HomeSection";
import { Speaking } from "./pages/sections/Speaking";
import { Listening } from "./pages/sections/Listening";
import { Writing} from "./pages/sections/Writing"
import { Reading} from "./pages/sections/Reading"
import { MyWords} from "./pages/sections/MyWords"
import { MyVocabulary } from "./pages/sections/sub_sections/MyVocabulary";
import { Review } from "./pages/sections/sub_sections/Review";
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
          >
            <Route path="/home" element={ <HomeSection/>} />
            <Route path="speaking" element={<Speaking/>} />
            <Route path="listening" element={<Listening/>} />
            <Route path="writing" element={<Writing/>} />
            <Route path="reading" element={<Reading/> } />
            <Route path="words" element={<MyWords/>}>
             <Route path="mywords" element={<MyVocabulary/>}/>
             <Route path="mywords" element={<MyVocabulary/>}/>
             <Route path="review" element={<Review/>}/>
            </Route>
          </Route>
          <Route path="/*" element={<p>Page not found</p>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
