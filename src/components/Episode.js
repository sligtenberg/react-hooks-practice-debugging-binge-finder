import React from "react";

function Episode(props) {
  return (
    <div>
      Episode {props.episode.number} - {props.episode.name}
    </div>
  );
}

export default Episode;
