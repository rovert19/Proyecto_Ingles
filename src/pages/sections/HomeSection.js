import { Header } from "../../components/Header";
import { CircleBar } from "../../components/progress/CircleBar";
import { Word } from "../../components/word/Word";
import './css/HomeSection.css'
export const HomeSection = () => {
  return (
    <div className="home-section">
        <Header text="My progress"/>
        <div className="home-content">
          <div className="progress-container">
          <CircleBar end={80} title="My words" info="20" color="#02a499"/>
          <CircleBar end={50} title="Speaking time" info="45min" color="#0866c6"/>
          <CircleBar end={30} title="Writing time" info="20min" color="#ec4561"/>
          </div>
          <div className="lastest-words">
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
            <Word/>
          </div>
        </div>
        
    </div>
  )
}
