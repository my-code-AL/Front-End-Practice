
import './App.css';

// // Components
import Header from "./Header";
import Sidenav from "./Sidenav.js";

import Layout from "./Layout.jsx";

import Footer from "./Footer";
import LandingView from "./LandingView";
import ExampleDataView from "./ExampleDataView";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidenav />
        <Routes>
          <Route path="/" element={<Navigate to="/landingview" replace />} />
          <Route path="/landingview" element={<LandingView />} />
          <Route path="/exampledataview" element={<ExampleDataView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;










/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// import './App.css';

// // // Components
// import Header from "./Header";
// import Sidenav from "./Sidenav.js";

// import Footer from "./Footer";
// import LandingView from "./LandingView";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Sidenav />
//       <LandingView />
//       <Footer />
//     </div>
//   );
// }

// export default App;