import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import BreachAlert from './BreachAlert';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="@apps/breachAlert" /> */}
      <BreachAlert />
    </StyledApp>
  );
}

export default App;
