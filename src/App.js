import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import Clock from "./Clock";
import { useState } from "react";
import currencies from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    setResult({
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="App">
      <Clock />
      <Container>
        <Form result={result} calculateResult={calculateResult} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
