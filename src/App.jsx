import "./index.css"; // Esto debe estar presente

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Login from "./components/views/Login";

import ContextApp from "./context/Context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "*",
      element: <h1>error</h1>,
    },
  ]);

  return (
    <ContextApp>
      <RouterProvider router={router} />
    </ContextApp>
  );
}

export default App;
