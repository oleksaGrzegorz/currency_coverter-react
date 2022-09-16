import "./style.css";
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
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency converter</legend>
        <p>
          <label>
            <span className="form__labelText">Amount:</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__field"
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
            <span className="form__labelText">Convert to:</span>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        You have:{" "}
        <strong className="result">
          {result !== undefined && (
            <strong>
              {result.targetAmount.toFixed(2)} {result.currency}
            </strong>
          )}
        </strong>
      </fieldset>
      <button className="form__button">Convert</button>
    </form>
  );
};

export default Form;
