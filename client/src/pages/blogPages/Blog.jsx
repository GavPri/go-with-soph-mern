import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import DOMpurify from "dompurify";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get("/get-blogs");
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="mt-28 flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <div className="w-3/4 lg:w-1/2">
        {blogs.map((blog) => {
          const { _id, title, heroImage, content } = blog; // Destructure id and content

          return (
            // Return the Card component
            <div className="col-md-4 mb-4 w-full font-qs " key={_id}>
              <Card className="w-full text-text bg-bg">
                <Card.Img
                  variant="top"
                  src={heroImage}
                  alt={title}
                  className="object-cover h-[350px]"
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMpurify.sanitize(content.slice(0, 100)),
                      }}
                    />
                    {content.length > 100 && "..."}
                  </Card.Text>
                  <NavLink>Read Blog</NavLink>{" "}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
