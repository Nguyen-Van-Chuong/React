import React from "react";
import { connect } from "react-redux";

export const SongDetail = ({ song }) => {
  if (!song) {
    return <div> Select a Song</div>;
  }
  return (
    <div>
      <h3 className="text-lg font-bold ">Details for:</h3>
      <p className="text-base font-normal">
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
