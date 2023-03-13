import { useState, useEffect } from "react";

const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  const API_URL = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    const fetchRates = () => {
      fetch(API_URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(({ rates, date }) => {
          setRatesData({
            state: "success",
            rates,
            date,
          });
        })
        .catch(() => {
          setRatesData({
            state: "error",
          });
        });
    };
  
    setTimeout(fetchRates, 2000);
  }, []);

  return ratesData;
};

export default useRatesData;