import NavigationBar from "./components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";

axios.defaults.baseURL = "https://gowithsoph.vercel.app";

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
