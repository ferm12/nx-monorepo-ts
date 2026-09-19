import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import Macdonalds from './Macdonalds';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Macdonalds />
    </StyledApp>
  );
}

export default App;
