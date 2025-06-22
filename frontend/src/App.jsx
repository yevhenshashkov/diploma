import {createBrowserRouter, RouterProvider} from "react-router";


//Loaders

//Pages
import AboutUs from "./pages/about-us";
import Hotels from "./pages/hotels/";

//Components
import Layout from "./components/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: "hotels",
                element: <Hotels/>
            },
            {
                path: "about-us",
                element: <AboutUs/>,
                loader: () => {
                    console.log("Loading data")
                }
            },
            {
                path: "*",
                element: <div>404 Page</div>
            },

        ]
    },
    {
        path: "*",
        element: <div>404 page</div>,
    }
])

function App() {
    return (<RouterProvider router={router}/>)

}

export default App
