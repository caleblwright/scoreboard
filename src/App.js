import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import "./App.css";

const App = () => {
  const [players, setPlayers] = useState([
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

  const [nextPlayerId, setNextPlayerId] = useState(5);

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

  const handleAddPlayer = (name) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId,
      },
    ]);

    setNextPlayerId((prevId) => prevId + 1);
  };

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />

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

      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
