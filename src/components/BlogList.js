const BlogList = ({ blogs, title, }) => {
  //the passen parameter is an object called props, we can destructure it to get the values we need
    //based on the props passed from the parent component
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
