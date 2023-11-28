import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ListComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:5001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

ListComments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default ListComments;
