import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {BrowserRouter, createBrowserRouter,Navigate,Outlet,Route,RouterProvider,Routes} from "react-router-dom";
import Register from "./pages/register/Register";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Layout from "./pages/Layout";
// import { Navigate } from "react-router-dom";
function App() {

    const currentUser = false;
    // const Layout = () => {
    //   return (
    //     <div>
    //       <NavBar/>
    //       <div className="flex">
    //         <LeftBar/>
    //         <Outlet/>
    //         <RightBar/>
    //       </div>
    //     </div>
    //   );
    // };

    const protectedRoute=({children})=>{
      console.log(currentUser);
    if(!currentUser){
      return <Navigate to = "/login"/>;
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element:(<protectedRoute>
        <Layout/>
      </protectedRoute>
        ),
      // children:[
      //   {
      //     path:'/',
      //     element:<Home/>,
      //   },
      //   {
      //     path:'/profile/:id',
      //     element:<Profile/>,
      //   },
      // ],
    },
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/register',
      element:<Register/>,
    },
  ])

  
  return (
      
      // <Routes>
      //   <Route path="/login" element = {<Login/>}/>
      //   <Route path="/register" element = {<Register/>}/>
      // </Routes>
      <div>
        <RouterProvider router = {router}/>
      </div>


  );
}

export default App;
