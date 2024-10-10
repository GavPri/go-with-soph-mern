import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import DOMpurify from "dompurify";
import { MdLocationPin } from "react-icons/md";
import SearchBar from "../../components/SearchBar";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "/get-blogs?page=1&limit=3&sortBy=newest"
      );
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
      <SearchBar />
      <div className="w-3/4 flex flex-col items-center">
        <h2 className="my-6 text-text font-qs tracking-wide font-bold">
          Latest from <span className="text-brand">GoWithSoph</span>
        </h2>
        <div className="row">
          {blogs.map((blog) => {
            const { _id, title, heroImage, content, tags, destination } = blog;

            return (
              <div className="col-md-4 mb-4" key={_id}>
                <Card className="h-100 text-text bg-bg">
                  <Card.Img
                    variant="top"
                    src={heroImage}
                    alt={title}
                    className="object-cover h-[250px]"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      <div className="d-flex flex-wrap mb-2">
                        {tags.map((tag, index) => (
                          <div
                            key={index}
                            className="rounded bg-light border text-brand px-2 py-1 mr-2 mb-2"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <MdLocationPin size={20} />{" "}
                        <span className="ml-1">{destination}</span>
                      </div>
                    </Card.Text>
                    <div className="mt-auto">
                      <NavLink
                        className="btn bg-brand text-bg"
                        to={`/blog/${_id}`}
                      >
                        Read Blog
                      </NavLink>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
