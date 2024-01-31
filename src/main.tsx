import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CartItem from "./components/CartItem.tsx";
import RootRoute from "./routes/RootRoute.tsx";
import  { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cartItem",
        element: <CartItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </Provider>
  </React.StrictMode>
);
