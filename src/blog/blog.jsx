import "./blog.css";
import blog from "../blog.json";

const Blog = () => {
  return (
    <div>
      <div className="blogCon">
        {blog.map((each) => {
          const { title, head, name, time, id, image } = each;
          return (
            <div className="eachImg" key={id}>
              <img src={image} alt="blogImage" className="img" />
              <h4 className="h4">{title}</h4>
              <h3 className="h3">{head}</h3>
              <p className="p">{`${name} / ${time}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
