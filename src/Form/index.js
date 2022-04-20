import "./style.css";

const Form = () => (
    <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Currency converter</legend>
            <p>
              <label>
                <span className="form__labelText">Amount:</span> <input className="form__field"
                  placeholder="Amount (PLN)" required type="number" min="0.01" step="0.01" />
              </label>
            </p>
            <p>
              <label>
                <span className="form__labelText">Convert to:</span>
                <select className="form__field">
                  <option value="EUR">Euro</option>
                  <option value="USD">US Dollar</option>
                  <option value="GBP">Pound Sterling</option>
                </select>
              </label>
            </p>
            You have: <strong className="form__result">N/A</strong>
          </fieldset>
          <button className="form__button">Convert</button>
          <button type="reset" className="form__button">Reset</button>

        </form>
);

export default Form;