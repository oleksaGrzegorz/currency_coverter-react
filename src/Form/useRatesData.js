import { useState, useEffect } from "react";

const useRatesData = () => {
  const [ratesData, setRatesData] = useState();

  const API_URL = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setRatesData(data.rates);
      })
      .catch((error) => console.error(error));
  }, []);

  return ratesData;
};

export default useRatesData;