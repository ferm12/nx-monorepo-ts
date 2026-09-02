import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import StarRating from './StarRating'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
        <StarRating length={5} />
    </StyledApp>
  );
}

export default App;
