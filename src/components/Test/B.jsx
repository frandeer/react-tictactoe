import React, { useCallback } from "react";

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  return <li>{post.title}</li>;
});

const List = React.memo(({ posts, testFunction }) => {
  console.log("List");
  testFunction();

  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log("B");
  const testFunction = useCallback(() => {
  () => {}
  }, []);

  return (
    <div>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />
    </div>
  );
};

export default B;
