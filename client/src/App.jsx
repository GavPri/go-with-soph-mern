import NavigationBar from "./components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/blogPages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import CreatePost from "./pages/blogPages/CreatePost";
import BlogPost from "./pages/blogPages/BlogPost";
import EditPost from "./pages/blogPages/EditPost";
import LikedBlogs from "./pages/blogPages/LikedBlogs";

axios.defaults.baseURL = "https://gowithsoph.vercel.app/api";

axios.defaults.withCredentials = true;

function App() {
  const Root = () => {
    return (
      <>
        <div>
          <NavigationBar />
          <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        </div>
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  // * Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/blog/:_id" element={<BlogPost />} />
        <Route path="/edit-blog/:_id" element={<EditPost />} />
        <Route path="likes" element={<LikedBlogs />} />
      </Route>
    )
  );

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
