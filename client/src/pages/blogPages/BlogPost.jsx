import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchBar from "../../components/SearchBar";
import { CiHeart } from "react-icons/ci";
import CommentsForm from "../../components/CommentsForm";
import { toast } from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import BlogCardSkeleton from "../../components/skeletonComponents/blogCardSkeleton";
import { FaRegCommentDots } from "react-icons/fa";
import BlogSkeleton from "../../components/skeletonComponents/blogSkeleton";

const BlogPost = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { _id } = useParams();
  const { user } = useContext(UserContext);
  const [blogData, setBlogData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [likesCount, setLikesCount] = useState({});
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentToEdit, setCommentToEdit] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("Fetched ID:", _id);
        const { data } = await axios.get(`/get-blogs/${_id}`);
        setBlogData(data);
        setLikesCount(data.likes.length);
        setComments(data.comments);
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
      const response = await axios.delete(`/delete-blogs/${_id}`);

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
      toast.error("Log in to like or unlike a post!");
      return;
    }

    try {
      const endpoint = hasLiked
        ? `/blogs/${_id}/unlike`
        : `/blogs/${_id}/likes`;
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
      toast.error(
        `Failed to ${hasLiked ? "unlike" : "like"} the post. Please try again.`
      );
    }
  };
  const handleCommentSubmit = async (commentData, commentId) => {
    try {
      const response = commentId
        ? await axios.put(`/blogs/${_id}/edit/${commentId}`, commentData)
        : await axios.post(`/blogs/${_id}/comment`, commentData);
      if (response.status === 201 || response.status === 200) {
        if (commentId) {
          setComments((prevComments) =>
            prevComments.map((c) =>
              c._id === commentId ? response.data.comment : c
            )
          );
        } else {
          setComments((prevComments) => [
            ...prevComments,
            response.data.comment,
          ]);
        }
        toast.success(commentId ? "Comment updated!" : "Comment posted!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to post comment.");
    }
  };
  const handleDeleteComment = async (commentId) => {
    try {
      const response = await axios.delete(`/blogs/${_id}/delete/${commentId}`);
      if (response.status === 200) {
        setComments((prevComments) =>
          prevComments.filter((c) => c._id !== commentId)
        );
        toast.success("Comment deleted!");
      }
    } catch (error) {
      console.error("Failed to delete comment:", error);
      toast.error("Failed to delete comment.");
    }
  };
  const handleEditComment = async (comment) => {
    setCommentToEdit(comment);
    setComments(
      (prevComments) => prevComments.filter((c) => c._id !== comment._id) // remove comments from the screen
    );
  };

  return (
    <div className="mt-36 flex flex-col justify-center items-center w-full relative">
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
            <h1 className="font-qs text-text text-xl bg-bg bg-opacity-80 px-2 py-2 rounded-md text-center">
              {blogData.title}
            </h1>
          </div>
          <div className="w-3/4 my-8">
            <div
              className="font-qs leading-8 text-text"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />
          </div>
          <div className="flex flex-col justify-between items-start w-3/4">
            <div className="flex justify-start items-start">
              <button
                onClick={handleLike}
                className={` font-qs flex flex-col items-center justify-evenly mr-4`}
              >
                <CiHeart
                  size={30}
                  className={`${hasLiked ? "text-green-500" : "text-gray-500"}`}
                />
                <p>{likesCount}</p>
              </button>
              <div className="font-qs flex flex-col items-center justify-evenly">
                <FaRegCommentDots
                  size={30}
                  className="text-brand w-6 font-thin"
                />
                <p>{comments.length}</p>{" "}
                {/* This will display the number of comments */}
              </div>
            </div>
            <CommentsForm
              user={user}
              blogId={_id}
              handleCommentSubmit={handleCommentSubmit}
              commentToEdit={commentToEdit}
            />
          </div>
          <div className="w-3/4 flex flex-col">
            {blogData.comments.map((c) => (
              <div
                key={c._id}
                className="bg-bg text-text p-4 font-qs rounded-md my-2 flex flex-col relative"
              >
                <p className="text-xl mb-2">{c.content}</p>
                <p>
                  <span className="mr-2">-</span>
                  {c.user.name}
                </p>
                {/* Check if the logged-in user owns the comment */}
                {user && c.user._id === user._id && (
                  <Dropdown className="absolute top-0 right-0">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="flex justify-evenly items-center"
                    >
                      <BsThreeDots />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleEditComment(c)}>
                        Edit comment
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <button onClick={() => handleDeleteComment(c._id)}>
                          Delete comment
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <BlogSkeleton />
      )}
    </div>
  );
};

export default BlogPost;
