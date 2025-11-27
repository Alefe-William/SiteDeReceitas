import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"


export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route> path = "/" element = {<Home/>}</Route>
                <Route> path = "/Register" element ={<Register/>}</Route>

            </Routes>
        
        </BrowserRouter>
    )
}