import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App.tsx';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Game from './pages/Game';
import PlayerInfo from './pages/PlayerInfo.tsx';
import Square from './components/Square.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <p>Index?</p>
      </>
    )
  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: '/player/search',
    element: <PlayerInfo />
  },
  {
    path: '/square/:id', 
    element: <Square />
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
