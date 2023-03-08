import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <Clock />
      <Container>
        <Form />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
