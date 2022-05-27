import { GlobalStyle } from "./components/styled/GlobalStyle.styled"
import { Header } from "./components/Header";
import {Container} from "./components/styled/Container.styled"
import content from "./content"
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        {content.map((item) => (
          <Card key={item.id} {...item}/>
        ))}
      </Container>
    </>
  );
}

export default App;
