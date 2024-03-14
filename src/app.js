import ReactDOM from "react-dom/client";
import AppLayout from "./index";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Cart } from "./components/Cart";
import UserContext from "./utils/UserContext";
import "./index.css";

//lazy loading, dynamic import, on demand import, code
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState();

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Harit Khushwas" }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

//router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AppLayout /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "restaurant/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
