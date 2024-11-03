import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryEstimate from "../pages/SalaryEstimate";
import NotFound from "../Pages/NotFound"; 
import Contact from "../Pages/Contact";
import Privacy from "../Pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/salary-estimate",
        element: <SalaryEstimate />,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/privacy",
        element: <Privacy/>
      },
      {
        path: "*",
        element: <NotFound />, 
      },
    ],
  },
]);

export default router;
