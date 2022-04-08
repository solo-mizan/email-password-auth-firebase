import { getAuth } from "firebase/auth";
import './App.css';
import app from './firebase.init';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form>
        <input placeholder="Your email" type="text" name="" id="" />
        <br />
        <input placeholder="Your password" type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
