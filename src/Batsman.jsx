import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const [sixes, setSixes] = useState(0);

  const [bowls, setBowls] = useState(0);

  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleSixes = () => {
    const updateSixes = runs + 6;
    const newsixes = sixes + 1;
    setSixes(newsixes);
    setRuns(updateSixes);
  };

  const handleBowlers = () => {
    const newBowlers = bowls + 1;
    setBowls(newBowlers);
  };

  return (
    <div>
      <h3>Player : Bangla Batsman</h3>
      <p>
        <small>Six : {sixes}</small>
      </p>
      {runs > 50 && <p>Congratulates for 50</p>}
      {bowls > 6 && <p>New Over</p>}
      <h1>Score : {runs}</h1>
      <h1>Bowls : {bowls}</h1>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleBowlers}>Bowler</button>
      <button>Fours</button>
      <button onClick={handleSixes}>Sixes</button>
    </div>
  );
}
