import NavigationBar from "./components/NavigationBar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  // * Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}></Route>
      // TODO create Root
    )
  );

  return <></>;

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
