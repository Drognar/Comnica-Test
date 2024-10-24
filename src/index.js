import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavigationBar />
      <Hero />
  </React.StrictMode>
);
