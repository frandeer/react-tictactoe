import { useEffect, useState } from "react";
import A from "./A";
import B from "./B";
import "./Test.css";

const Test = () => {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Test</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div id="test">
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
};

export default Test;
