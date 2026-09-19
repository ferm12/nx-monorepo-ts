import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import ArrayRotate from './ArrayRotate'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <>
      <ArrayRotate />
    </>
    // <StyledApp>
    //   <NxWelcome title="@apps/arrayRotate" />
    // </StyledApp>
  );
}

export default App;
