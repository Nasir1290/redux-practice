import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Counter from "../pages/Counter";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                index:true,
                element:<Counter/>
            }
        ]
    }
]);