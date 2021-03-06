import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import { useState } from "react";
import { currencies } from "./Form/index.js";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => 
  {const rate = currencies.find(({ short }) => short === currency).rate;
    setResult({
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="App">
      <Container>
        <Form 
        result={result}
        calculateResult={calculateResult}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
