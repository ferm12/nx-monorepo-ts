import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import Accordion from './Accordion';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Accordion />
    </StyledApp>
  );
}

export default App;
