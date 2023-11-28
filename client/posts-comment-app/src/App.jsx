import CreatePost from "./CreatePost";
import ListPost from "./ListPost";

function App() {
  return (
    <div className="container">
      <h1>Creat Posts</h1>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <ListPost />
    </div>
  );
}

export default App;
