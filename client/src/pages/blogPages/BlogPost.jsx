import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BlogPost = () => {
  const { _id } = useParams();
  const { user } = useContext(UserContext);
  const [blogData, setBlogData] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="mt-32 flex flex-col justify-center items-center w-full relative">
      {user.role === "author" && (
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
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Delete blog post:</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to delete this blog post?: <br></br>
                    {blogData.title}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>
                    <Button variant="warning">Delete Blog Post</Button>
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
