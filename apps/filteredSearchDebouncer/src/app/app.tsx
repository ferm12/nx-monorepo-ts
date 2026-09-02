import styled from 'styled-components';
import FilteredSearchDebouncer from './FilteredSearchDebouncer';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <FilteredSearchDebouncer />
    </StyledApp>
  );
}

export default App;
