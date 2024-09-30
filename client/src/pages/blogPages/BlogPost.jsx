import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Dropdown from "react-bootstrap/Dropdown";

const BlogPost = () => {
  const { _id } = useParams();
  const { user } = useContext(UserContext);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("Fetched ID:", _id);
        const { data } = await axios.get(`/get-blogs/${_id}`);
        setBlogData(data);
        console.log(blogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [_id]);

  return (
    <div className="mt-32 flex flex-col justify-center items-center w-full relative">
      {user.role === "author" && (
        <>
          <Dropdown className="absolute top-4 right-4">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <span className="rounded-full w-3 h-3 bg-brand hover:bg-bg"></span>
              <span className="rounded-full w-3 h-3 bg-brand hover:bg-bg"></span>
              <span className="rounded-full w-3 h-3 bg-brand hover:bg-bg"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to={`/edit-blog/${_id}`}>Edit</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
      {blogData ? (
        <>
          <div
            className="flex flex-col justify-center items-center bg-bg w-3/4 h-[350px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${blogData.heroImage})` }}
          >
            <h1 className="font-qs text-text text-4xl bg-bg bg-opacity-60 px-4 py-2 rounded-md text-center">
              {blogData.title}
            </h1>
          </div>
          <div className="w-3/4 mt-8">
            <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
