import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

const CommentsForm = ({ user, blogId, handleCommentSubmit }) => {
  // state for input
  const [comment, setComment] = useState("");
  return (
    <div className="w-full ">
      <form>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
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
          <div class="flex items-center justify-between px-3 py-2 border-t">
            <button class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-brand rounded-lg">
              Post comment
            </button>
          </div>
        </div>
      </form>
      <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
        Remember, contributions to this topic should follow our{" "}
        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">
          Community Guidelines
        </a>
        .
      </p>
    </div>
  );
};

export default CommentsForm;
