import "./blog.css";
import { useEffect, useState } from "react";

const Blog = () => {
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const blogFecther = async () => {
      const responseObject = await fetch(`/api/blog`, { signal });
      const response = await responseObject.json();
      setresponse(response);
    };
    blogFecther();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div className="blogCon">
        {response.map((each) => {
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
