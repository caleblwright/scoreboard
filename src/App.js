import React from "react";
import Header from "./Header";
import Player from "./Player";
import "./App.css";

const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Caleb",
      score: 0,
      id: 1,
    },
    {
      name: "Sari",
      score: 0,
      id: 2,
    },
    {
      name: "Matt",
      score: 0,
      id: 3,
    },
    {
      name: "Greg",
      score: 0,
      id: 4,
    },
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers((prevState) => prevState.filter((p) => p.id !== id));
  };

  const handleScoreChange = (id, delta) => {
    setPlayers((prevState) =>
      prevState.map((player) => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id,
          };
        }
        return player;
      })
    );
  };

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {players.map((players) => (
        <Player
          name={players.name}
          score={players.score}
          id={players.id}
          key={players.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
    </div>
  );
};

export default App;
