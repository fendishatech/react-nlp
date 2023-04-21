import { createBrowserRouter } from "react-router-dom";
import { Login, Register, PublicLayout, Home, POS } from "../views";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pos",
        element: <POS />,
      },
    ],
  },
]);

export default router;
