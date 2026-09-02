import styled from 'styled-components';
import React, { Component } from 'react';
import FootballMatchesData from './FootballMatchesData';

const title = "Football Comptetions";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <FootballMatchesData/>
      </div>
    </StyledApp>
  );
}

export default App;