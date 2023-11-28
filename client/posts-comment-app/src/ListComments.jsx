import PropTypes from "prop-types"; 


const ListComments = ({comments}) => {
  

 
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

ListComments.propTypes = {
  comments: PropTypes.string.isRequired,
};

export default ListComments;
