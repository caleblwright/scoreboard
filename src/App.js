import "./App.css";

function App() {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      <Player playerName="Caleb" playerScore={0} />
      <Player playerName="Sari" playerScore={1} />
      <Player playerName="Matt" playerScore={0} />
      <Player playerName="Greg" playerScore={0} />
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name"> {props.playerName} </span>
      <Counter playerScore={props.playerScore} />
    </div>
  );
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.playerScore}</span>
      <button className="counter-action increment"> +</button>
    </div>
  );
}

export default App;
