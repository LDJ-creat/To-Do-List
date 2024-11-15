import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import {Provider} from "react-redux";
import store from "./Store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
)
