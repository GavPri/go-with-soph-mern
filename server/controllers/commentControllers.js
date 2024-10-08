const createComment = async (req, res) => {
  const blogID = req.params._id; // get the blog id from the url
  const userID = req.user._id; // get the user id from auth.
  const content = req.body; // get the comment content

  
};

module.exports = { createComment };
