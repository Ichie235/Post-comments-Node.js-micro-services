import { useState } from "react";
import axios from "axios";



const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content,setContent] = useState("")
    
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:5000/posts", {
      title,
      content
    });

    setTitle("");
    setContent("")
  };
  return (
    <div><form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
       <label className="mt-4">Content</label>
        <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="form-control"
      />
    </div>
    <button className="btn btn-primary mt-2">Submit</button>
  </form></div>
  )
}

export default CreatePost





 