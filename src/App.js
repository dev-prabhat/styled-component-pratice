import { GlobalStyle } from "./components/styled/GlobalStyle.styled"
import { Header } from "./components/Header";
import {Container} from "./components/styled/Container.styled"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        Hello Brother
      </Container>
    </>
  );
}

export default App;
