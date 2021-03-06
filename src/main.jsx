import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './index.css';

// import component
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Survey from './components/Survey/Survey';
import Freelances from './components/Freelances/Freelances';
import Results from './components/Results/Results';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './utils/context/themeContext';
import { SurveyProvider } from './utils/context/surveyContext';
import GlobalStyle from './utils/style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
