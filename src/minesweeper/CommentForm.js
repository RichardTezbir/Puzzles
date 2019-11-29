import Comments from "./Comments";
import React, { Component } from "react";

export default function CommentForm(props) {
  const { commentsData, commentTextHandle, addCommentHandle } = this.props;
  return (
    <div className="container">
      <form>
        <div className="form">
          {/* <h2>{commentsData.player}</h2> */}
          <textarea
            placeholder="Write a Commmmment"
            className="comment"
            commentTextHandle={commentTextHandle}
          >
            {commentsData}
          </textarea>
          <button className="addBtn btn btn-primary" onClick={addCommentHandle}>
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
}
