import NavigationBar from "./components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
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
    <>
      <RouterProvider router={router} />
    </>
  );

  const Root = () => {
    <>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>;
  };
}

export default App;
