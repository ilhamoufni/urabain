// import './App.css';
// import React , { useState }from "react";
// import Navbar from "./Components/navbar";
// import Intro from "./Components/intro";
// import DocumentsTable from "./Components/DocumentsTable";
// import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
// import axios from 'axios';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
  
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           loggedIn ? <DocumentsTable /> : <Intro onLoginSuccess={() => setLoggedIn(true)} />
//         } />
//         {/* Ajoutez d'autres routes si nécessaire */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

import Intro from "./Components/intro";
import LoginPopup from "./Components/LoginPopup";
import DocumentsTable from "./Components/DocumentsTable";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro/>,
  },
  {
    path: "/login",
    element: <LoginPopup />,
  },
  {
    path: "/documents",
    element: <DocumentsTable />,
  },
  {
    path: "/register",
    element: <register />,
  }
]);

function App() {
  return (
    <div>
<RouterProvider router={router}/>
    </div>
  )
}
export default App;
