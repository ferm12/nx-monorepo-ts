import styled from 'styled-components';
import OTPComponent from './OTPComponent'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {

  const len = 4;

  return (
    <StyledApp>
        <OTPComponent len={len} />
    </StyledApp>
  );
}

export default App;
