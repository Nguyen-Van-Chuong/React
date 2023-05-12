import React from "react";
import "./style.css";

function CommentDeltails(props) {
  return (
    <div className="comment">
      <div href="" className="avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="content">
        <div className="content__detail">
          <h4>{props.name || "Default props"}</h4>
          <div className="metadata">
            <span className="date">{props.timeAgo}</span>
          </div>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
}

export default CommentDeltails;
