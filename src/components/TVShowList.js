import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow";

function TVShowList(props) {
  function mapAllShows() {
    return props.shows.filter(s => {
      if (!!props.searchTerm) {
        return (s.name.toLowerCase().includes(props.searchTerm))
      }
      else return true
    })
    .map((s) => {
      return <TVShow show={s} key={s.id} selectShow={props.selectShow} />;
    })
  }

  return (
    <div className="TVShowList">
      <Grid>{mapAllShows()}</Grid>
    </div>
  );
}

export default TVShowList;
