
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Hotels from "./pages/hotels";
import AboutUs from "./pages/about-us";
import Contacts from "./pages/contacts";

// Layout
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Hotels /> },
            { path: "hotels", element: <Hotels /> },
            { path: "about-us", element: <AboutUs /> },
            { path: "contacts", element: <Contacts /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <SignUp /> },
        ],
    },
    {
        path: "*",
        element: <div>404 — Страница не найдена</div>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
