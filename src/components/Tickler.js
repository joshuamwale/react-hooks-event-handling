import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle Me!</button>;
}

export default Tickler;
