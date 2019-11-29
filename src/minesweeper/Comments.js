import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Comments extends Component {
  state = {
    commentsData: [],
    commentForm: false
  };

  componentDidMount() {
    fetch("http://localhost:3300/api/comments")
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentsData: data
        });
        console.log(data);
      })
      .catch(console.log);
  }
  handleClickAdd = () => {
    this.setState({
      commentForm: true
    });
    return <Link to="http://localhost:3000/minesweeper/comment-form"></Link>;
  };
  render() {
    return (
      <table className="table">
        <CommentsTableHeader />
        <CommentsTableBody commentsData={this.state.commentsData} />
        <AddComment
          CommentForm={this.state.commentForm}
          handleClickAdd={this.handleClickAdd}
        />
      </table>
    );
  }
}

function AddComment({ handleClickAdd }) {
  return (
    <tfoot>
      <tr>
        <td>
          <button
            className="btn btn-primary addBtn"
            onClick={e => {
              handleClickAdd();
            }}
          >
            Add Comment
          </button>
        </td>
      </tr>
    </tfoot>
  );
}

function CommentsTableHeader() {
  return (
    <thead>
      <tr>
        <th>Player</th>
        <th>Comment</th>
        <th>Date</th>
      </tr>
    </thead>
  );
}

function CommentsTableBody({ commentsData }) {
  const rows = commentsData.map((comment, index) => (
    <tr key={index}>
      <td>{comment.player}</td>
      <td>{comment.comment}</td>
      <td>{comment.date}</td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
}
