import {
  MainForm,
  LabelText,
  FormResult,
  Button,
  Fieldset,
  Legend,
  FormFieldInput,
  FormFieldSelect,
  Loading,
  Error,
} from "./styled";
import { useState, useEffect } from "react";
import useRatesData from "./useRatesData";

const Form = () => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState();

  const ratesData = useRatesData();

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  useEffect(() => {
    if (ratesData) {
      const currencyNames = Object.keys(ratesData);
      setCurrencies(currencyNames);
      setCurrency(currencyNames[0]);
    }
  }, [ratesData]);

  const calculateResult = (currency, amount) => {
    const rate = ratesData[currency];
    setResult({
      targetAmount: amount * rate,
      currency,
    });
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>Ładuję kursy walut z Europejskiego Banku Centralnego.</Loading>
      ) : ratesData.state === "error" ? (
        <Error>Strona nie działa. Sprawdź połączenie internetowe.</Error>
      ) : (
        <>
          <Fieldset>
            <Legend>Currency converter</Legend>
            <p>
              <label>
                <LabelText>Amount:</LabelText>
                <FormFieldInput
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  placeholder="Amount (PLN)"
                  required
                  type="number"
                  min="0.01"
                  step="0.01"
                />
              </label>
            </p>
            <p>
              <label>
                <LabelText>Convert to:</LabelText>
                <FormFieldSelect
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </FormFieldSelect>
              </label>
            </p>
            You have:{" "}
            <FormResult>
              {result !== undefined && (
                <strong>
                  {amount} PLN = {result.targetAmount.toFixed(2)}{" "}
                  {result.currency}
                </strong>
              )}
            </FormResult>
          </Fieldset>
          <Button>Convert</Button>
        </>
      )}
    </MainForm>
  );
};

export default Form;
