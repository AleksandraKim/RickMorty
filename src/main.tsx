import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.tsx';
import Episodes from './components/Episodes/Episodes.tsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>,
  },
  {
    path: "/Episodes",
    element: <Episodes/>,
  },
 

],
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  future={{v7_startTransition: true}}
  router={router}/>
  </StrictMode>,
)
