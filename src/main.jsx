import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=> fetch('../jobs.json'),  // only load the data you need. do not load all the data in real world work
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json'),  // only load the data you need. do not load all the data in real world work
      }
    ]

  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
