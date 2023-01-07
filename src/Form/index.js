import { MainForm, LabelText, FormResult, Button, Fieldset,Legend, FormFieldInput, FormFieldSelect } from "./styled";
import { useState } from "react";
import currencies from "../currencies";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <MainForm onSubmit={onFormSubmit}>
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
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </FormFieldSelect>
          </label>
        </p>
        You have:{" "}
        <FormResult>
          {result !== undefined && (
            <strong>
              {result.targetAmount.toFixed(2)} {result.currency}
            </strong>
          )}
        </FormResult>
      </Fieldset>
      <Button>Convert</Button>
    </MainForm>
  );
};

export default Form;
