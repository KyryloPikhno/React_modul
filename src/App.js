import './App.css';

function App() {
  const getConversionRate = (fromCurrency, toCurrency) => {
    const rates = {
      EUR: { JPY: 130, USD: 1.18 },
      USD: { EUR: 0.85, JPY: 110 },
    };
    return rates[fromCurrency][toCurrency];
  };

  const applyConversionRate = (amount, conversionRate) =>
    amount * conversionRate;

  const compose =
    (...fns) =>
    (x) =>
      fns.reduceRight((acc, fn) => fn(acc), x);

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    const conversionRate = getConversionRate(fromCurrency, toCurrency);
    return applyConversionRate(amount, conversionRate);
  };

  const amountToConvert = 100;
  const fromCurrency = 'USD';
  const toCurrency = 'EUR';

  const convertedAmount = convertCurrency(
    amountToConvert,
    fromCurrency,
    toCurrency
  );

  return (
    <div>
      <p>
        {`${amountToConvert} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`}
      </p>
    </div>
  );
}

export default App;
