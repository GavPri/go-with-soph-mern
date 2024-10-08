import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchBar from "../../components/SearchBar";
import { CiHeart } from "react-icons/ci";

const BlogPost = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useParams();
  const { user } = useContext(UserContext);
  const [blogData, setBlogData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [likesCount, setLikesCount] = useState({});
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("Fetched ID:", _id);
        const { data } = await axios.get(`/api/get-blogs/${_id}`);
        setBlogData(data);
        setLikesCount(data.likes.length);

        if (user && data.likes.includes(user._id)) {
          setHasLiked(true);
        }
        console.log(blogData);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(blogData);
    fetchBlog();
  }, [_id, user]);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`/api/delete-blogs/${_id}`);

      if (response.status === 200) {
        console.log("Blog deleted successfully.");

        setShowModal(false);

        navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    if (!user) {
      alert("Log in to like or unlike a post!");
      return;
    }

    try {
      const endpoint = hasLiked
        ? `/api/blogs/${_id}/unlike`
        : `/api/blogs/${_id}/likes`;
      const method = hasLiked ? "POST" : "POST"; // Both are POST requests
      const response = await axios({
        method,
        url: endpoint,
        data: { user, blogData },
        withCredentials: true,
      });

      if (response.status === 200) {
        setHasLiked(!hasLiked); // Toggle like status
        setLikesCount((prev) => (hasLiked ? prev - 1 : prev + 1)); // Update likes count
      }
    } catch (error) {
      console.error(
        `Failed to ${hasLiked ? "unlike" : "like"} the post:`,
        error
      );
      alert(
        `Failed to ${hasLiked ? "unlike" : "like"} the post. Please try again.`
      );
    }
  };

  return (
    <div className="mt-32 flex flex-col justify-center items-center w-full relative">
      <SearchBar />
      {user && user.role === "author" && (
        <>
          <Dropdown className="absolute top-0 right-4">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Edit/Delete
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink
                  className={`w-full h-full bg-bg text-accentSecondary`}
                  to={`/edit-blog/${_id}`}
                >
                  Edit Blog
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={handleShowModal}>Delete Blog</button>
                <Modal
                  show={showModal}
                  onHide={handleCloseModal}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Delete blog post:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {blogData ? (
                      <>
                        Are you sure you want to delete this blog post?: <br />
                        {blogData.title}
                      </>
                    ) : (
                      <p>Loading blog data...</p>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={handleCloseModal}>
                      Close
                    </Button>
                    <Button
                      className="btn bg-red-400 text-accentSecondary"
                      disabled={isLoading}
                      onClick={handleDelete}
                    >
                      {isLoading ? <>Deleting post...</> : <>Delete post</>}
                    </Button>
                  </Modal.Footer>
                </Modal>
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
          <div className="flex justify-between items-center w-3/4">
            <button
              onClick={handleLike}
              className={`p-2 font-qs flex flex-col items-center justify-evenly`}
            >
              <CiHeart
                size={20}
                className={`${hasLiked ? "text-green-500" : "text-gray-500"}`}
              />
              <p>{likesCount}</p>
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
