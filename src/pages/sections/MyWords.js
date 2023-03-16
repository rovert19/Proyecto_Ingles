import { Header } from "../../components/Header";
import "./css/MyWords.css";
import {NavLink, Outlet,useParams} from "react-router-dom"; 

export const MyWords = () => {
  
  return (
    <div className="words-section">
      <Header text="My Words" />

      <div className="words-content">
        <div className="study-option">
          
          <NavLink className="vocabulary-option" to="/sub_sections/myvocabularyy">
          <h2>My vocabulary</h2>
            <img src={require('../../img/vocabulary.png')} alt="" />
          </NavLink>

          <NavLink className="review-option" to="review">
          <h2>It's time to review</h2>
            <img src={require('../../img/review.png')} alt="" />
          </NavLink>

        </div>
        <p>"The future depends on what you do today"</p>
      </div>
      
    </div>
  );
};
