import React, { useContext, useState } from "react";
import { MdDelete, MdTravelExplore } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../context/userContext";
import axios from "axios";

const CreatePost = () => {
  // * Access user context.
  const { user } = useContext(UserContext);

  // todo State to handle form changes.
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    heroImage: "",
    destination: "",
    tags: [],
    continent: "",
    content: "",
    author: user._id,
  });

  // todo Function to change input fields ---- add values & onclicks to inputs.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContent = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  // todo add functions to display tags added
  const [tagInput, setTagInput] = useState("");

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToDelete),
    }));
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  // todo handle submit function --- add it to form.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      user: user.id,
    };

    try {
      const response = await axios.post("/create", dataToSend);
      console.log(response.data);
    } catch (error) {}
    console.error({ error: error.response.data });
  };

  const continents = [
    "Asia",
    "Africa",
    "North America",
    "South America",
    "Antarctica",
    "Europe",
    "Australia",
  ];
  return (
    <div className="mt-28 flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <div className="text-center flex flex-col justify-center items-center font-qs font-bold tracking-wider text-2xl mb-6 pt-6">
        <h2 className="flex flex-col items-center text-brand text-xl mb-2">
          {" "}
          <MdTravelExplore size={40} /> GoWithSoph
        </h2>
        <p className="text-lg text-text ">Create a blog post</p>
      </div>
      {/* *Form inputs for form. */}
      <form
        className="h-fit w-10/12  p-4 rounded-lg lg:w-1/2"
        onSubmit={handleSubmit}
      >
        {/* 3 inputs for author. */}
        {/* Title */}
        <label htmlFor="title"></label>
        <input
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          type="text"
          name="title"
          className="w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        {/* Slug */}
        <label htmlFor="slug"></label>
        <input
          value={formData.slug}
          onChange={handleChange}
          placeholder="Slug"
          type="text"
          name="slug"
          className=" w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        {/* Hero image */}
        <label htmlFor="heroImage"></label>
        <input
          value={formData.heroImage}
          onChange={handleChange}
          placeholder="Hero image URL"
          type="text"
          name="heroImage"
          className="w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        <label htmlFor="destination"></label>
        <input
          value={formData.destination}
          onChange={handleChange}
          placeholder="Destination"
          type="text"
          name="destination"
          className="w-full mb-6 px-4 py-2 border-b-2 border-brand rounded-lg"
        />
        {/* Tags */}
        <div className="flex flex-col rounded-lg w-full mb-6">
          <div className="flex rounded-lg w-full mb-6">
            <input
              onChange={handleTagChange}
              value={tagInput}
              type="text"
              className="rounded-l-lg w-10/12 px-4 py-2  border-b-2 border-brand"
              placeholder="Tags"
            />
            <button
              onClick={handleAddTag}
              className="bg-brand text-bg rounded-r-lg w-2/12 flex justify-center"
            >
              <IoIosAddCircleOutline size={40} />
            </button>
          </div>
          <div className="">
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap">
                {formData.tags.map((tag, index) => (
                  <div
                    key={tag}
                    className="flex items-center justify-between mb-2"
                  >
                    <div className="bg-brand text-bg px-4 py-2 rounded-full mr-2 flex justify-between items-center ">
                      {tag}
                      <button
                        onClick={() => handleDeleteTag(tag)}
                        className="text-red-400 text-center ml-2"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Continents */}
        <label htmlFor="continent"></label>
        <select
          value={formData.continent}
          onChange={handleChange}
          name="continent"
          id=""
          className="w-full px-4 py-2 mb-6 rounded-lg border-b-2 border-brand text-text"
        >
          <option value="Select a continent">Select a continent</option>
          {continents.map((con) => (
            <option key={con} value={con}>
              {con}
            </option>
          ))}
        </select>
        {/* *Quill text editor */}
        <ReactQuill
          modules={modules}
          value={formData.content}
          className="mb-6 rounded-md"
          onChange={handleContent}
          placeholder="Write your blog here!"
          theme="snow"
        />
        {/* Button to submit or save draft */}
        <div className="flex justify-between items-center">
          <button className="bg-brand text-bg border-2 border-brand px-4 py-2 rounded-lg">
            Publish
          </button>
          <button className="bg-bg text-brand border-brand border-2 px-4 py-2 rounded-lg">
            Save Draft
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
