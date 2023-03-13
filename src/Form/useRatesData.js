import { useState, useEffect } from "react";

const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  const API_URL = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setRatesData({
          state: "success",
          rates: data.rates,
          date: data.date,
        });
      })
      .catch(() => {
        setRatesData({
          state: "error",
        });
      });
  }, []);

  return ratesData;
};

export default useRatesData;