import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import LazyLoad from './LazyLoad';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <LazyLoad />
    </StyledApp>
  );
}

export default App;
