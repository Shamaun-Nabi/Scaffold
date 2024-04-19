import { createBrowserRouter } from "react-router-dom";
import { Wrapper } from "../Wrapper/Wrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);
