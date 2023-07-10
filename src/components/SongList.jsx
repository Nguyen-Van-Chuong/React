import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import SongDetail from "./SongDetail";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="text-xl font-semibold content ">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <>
        <div className="ui divide list">{this.renderList()}</div>
        <div className="text-center">
          <SongDetail></SongDetail>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
