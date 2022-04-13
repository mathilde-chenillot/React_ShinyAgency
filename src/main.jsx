import React from 'react';
import ReactDOM from 'react-dom';
import {
  useParams, Navigate, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './index.css';

// // import component
// import Home from './components/Home/Home';
// import Header from './components/Header/Header';
// import Survey from './components/Survey/Survey';
// import Freelances from './components/Freelances/Freelances';
// import Results from './components/Results/Results';
// import Error from './components/Error/Error';
import App from './components/App/App';

const GlobalStyle = createGlobalStyle`
 div {
   font-family: 'Trebuchet MS', Helvetica, sans-serif;
 }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<Error />} />
      </Routes> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
