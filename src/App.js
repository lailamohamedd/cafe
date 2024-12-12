import React from 'react';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Landing from './Components/Landing/Landing';
import Srvices from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
      <Route path="/sevices" element={<Srvices />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/banner" element={<Banner />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
  </Route>
))

function App() {
  return (
    <div className="App">
      <>
        <RouterProvider router={routes} />
      </>
    </div>
  );
}

export default App;
