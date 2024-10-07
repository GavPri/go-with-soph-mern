import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap"; //
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
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
      <h1>Your Liked Posts</h1>
      <div></div>
      {!user ? (
        <p>Please log in to view your liked posts.</p>
      ) : likedBlogs.length > 0 ? (
        likedBlogs.map((post) => {
          // Destructure the necessary properties from each post
          const { _id, title, heroImage, tags, destination } = post;

          return (
            <div className="col-md-4 mb-4 w-3/4" key={_id} >
              <Card key={_id} className="h-100 text-text bg-bg w-3/12">
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
        })
      ) : (
        <p>You haven't liked any posts yet.</p>
      )}
    </div>
  );
};

export default LikedBlogs;
