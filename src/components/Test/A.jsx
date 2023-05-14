

const A = ({ message, posts }) => {
  return (
    <div>
      <p>{message}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default A;
