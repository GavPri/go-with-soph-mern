import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import toast from "react-hot-toast";

const CommentsForm = ({ user, blogId, handleCommentSubmit, commentToEdit }) => {
  // state for input
  const [comment, setComment] = useState(
    commentToEdit ? commentToEdit.content : ""
  );

  useEffect(() => {
    if (commentToEdit) {
      setComment(commentToEdit.content);
    } else setComment("");
  }, [commentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      return toast.error("Log in to like a post!");
    } else {
      console.log("User found", user);
    }

    if (!blogId) {
      return toast.error("Blog id is not present.");
    } else {
      console.log("Blog id found", blogId);
    }

    const commentData = {
      content: comment,
      user: user._id,
      blog: blogId,
    };
    console.log("Comment data: ", commentData);

    handleCommentSubmit(commentData, commentToEdit ? commentToEdit._id : null);
    setComment("");
  };
  return (
    <div className="w-full ">
      <form onSubmit={handleSubmit}>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-bg">
          <div class="px-4 py-2 bg-bg rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              id="comment"
              rows="4"
              class="w-full px-0 text-sm text-text bg-bg focus:outline-none focus:ring-0 "
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t bg-bg">
            <button class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-brand rounded-lg">
              Post comment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentsForm;
