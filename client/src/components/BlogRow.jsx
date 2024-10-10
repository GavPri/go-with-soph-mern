// BlogList.js
import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

const BlogRow = ({ blogs }) => {
  return (
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
  );
};

export default BlogRow;
