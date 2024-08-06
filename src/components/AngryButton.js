import { useState } from 'react';



function AngryButton() {

  const [anger, setAnger] = useState(0);
  const handleClick = (amount) => {
    anger < 1 ? setAnger(anger + amount) : setAnger(0);
  }

  return (
    <button
    style={{backgroundColor:`rgba(255 ,0, 0, ${anger})` }}
    onClick={() => handleClick(0.1)}
    className="AngryButton">

      {/* If you have NOT reached max */}
      {anger < 1 && <span>Don't click me to much!</span>}
      {/* If you HAVE reached the max */}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;