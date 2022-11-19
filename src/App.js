import React from "react";
import "./App.css";

const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Caleb",
      id: 1,
    },
    {
      name: "Sari",
      id: 2,
    },
    {
      name: "Matt",
      id: 3,
    },
    {
      name: "Greg",
      id: 4,
    },
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers((prevState) => prevState.filter((p) => p.id !== id));
  };

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {players.map((players) => (
        <Player
          name={players.name}
          id={players.id}
          key={players.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      ))}
    </div>
  );
};

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
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter />
    </div>
  );
};

const Counter = () => {
  const [score, setScore] = React.useState(0);

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const decrementScore = () => {
    setScore((prevScore) => prevScore - 1);
  };

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => decrementScore()}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => incrementScore()}
      >
        +
      </button>
    </div>
  );
};

export default App;
