import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Counter from "../pages/Counter";
import Todo from "@/pages/Todo";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                index:true,
                element:<Todo/>
            },
            {
                path:"/counter",
                element:<Counter/>
            }
        ]
    }
]);