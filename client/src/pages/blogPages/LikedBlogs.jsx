import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/userContext";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import SearchBar from "../../components/SearchBar";


const LikedBlogs = () => {
  const [likedBlogs, setLikedBlogs] = useState([]); // state for storing blog posts.
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (!user) {
        console.log("User not logged in");
        return;
      }
      try {
        const response = await axios.get("/liked-blogs", {
          withCredentials: true,
        });
        setLikedBlogs(response.data.likedBlogs);
      } catch (error) {
        console.log("There was an error fetching the liked blogs", error);
      }
    };
    fetchLikedPosts();
  }, [user]);

  return (
    <div className="mt-28 flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <SearchBar />
      <div className="w-3/4">
        <h1>Your Liked Posts</h1>
        {!user ? (
          <p>Please log in to view your liked posts.</p>
        ) : likedBlogs.length > 0 ? (
          <div className="row">
            {likedBlogs.map((blog) => {
              const { _id, title, heroImage, tags, destination } = blog;

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
        ) : (
          <p>You haven't liked any posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedBlogs;
