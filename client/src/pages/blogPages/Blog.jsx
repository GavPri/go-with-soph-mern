import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card"; // Correct import for Card
import { NavLink } from "react-router-dom"; // Correct import for NavLink

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
      <div>
        {blogs.map((blog) => {
          const { _id, title, heroImage, content } = blog; // Destructure id and content

          return (
            // Return the Card component
            <div className="col-md-4 mb-4" key={_id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={heroImage} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {content.length > 100
                      ? `${content.slice(0, 100)}...`
                      : content}{" "}
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
