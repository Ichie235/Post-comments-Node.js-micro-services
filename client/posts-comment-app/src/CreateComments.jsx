import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types"; 

const CreateComments = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:5001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

CreateComments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default CreateComments;
