import styled from '@emotion/styled';
import TodoList from './TodoList';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <TodoList />
    </StyledApp>
  );
}

export default App;
