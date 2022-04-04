import "./App.css";
import { Player } from "./Components/Player";

function App() {
  return (
    <div className="App">
      <div className="App_Player">
        <Player
          fname="Lionel"
          lname="Messi"
          position="right_winger"
          isIn={true}
        />
      </div>

      <div className="App_Player">
        <Player
          fname="Cristiano"
          lname="Ronaldo"
          position="striker"
          isIn={true}
        />
      </div>
      <div className="App_Player">
        <Player fname="Neymar" position="left_winger" isIn={false} />
      </div>
    </div>
  );
}

export default App;
