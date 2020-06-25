import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';
import { BrowserRouter, Route } from 'react-router-dom';
import 'product-sans-webfont';
import 'typeface-spartan';

import SixFootFour from './components/atoms/6foot4';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProjectDetailsPage from './components/pages/ProjectDetails';
import theme from './themes';
import { initialiseFirebase } from './config/useFirebase';
import { onMouseMove } from './functions/onMouseMove';
import CursorContainer from './components/atoms/Cursor';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
  *::-webkit-scrollbar {
    width: 0 !important
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.palette.primary};
  }
`;

const App = () => {
  initialiseFirebase();

  return (
    <div onMouseMove={onMouseMove}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme color="#ffffff1a" highlightColor="#ffffff80">
          <GlobalStyle />
          <CursorContainer />
          <SixFootFour />
          <BrowserRouter>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/projects">
              <ProjectDetailsPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </BrowserRouter>
        </SkeletonTheme>
      </ThemeProvider>
    </div>
  );
};

export default React.memo(App);
