import './App.module.css';
import ProfileList from './components/profile/ProfileList';
import { AiFillGithub } from "react-icons/ai"
import { FaGithubSquare} from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <ProfileList/>
      <AiFillGithub/>
      <FaGithubSquare />
    </div>
  );
}

export default App;
