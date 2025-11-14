// const convertButton = document.querySelector("button");
const currencyValue = document.querySelector(".currency-value");
const currencyValueToConvert = document.querySelector(
  ".currency-value-to-convert"
);
const inputValue = document.querySelector(".input-value");
const currentCurrency = document.querySelector(".paragraph-currency-value");
const currentCurrencyToConvert = document.querySelector(
  ".paragraph-currency-value-to-convert"
);
const FlagConverted = document.querySelector(".flag-converted");



const formatToReal = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatToDolar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatToEuro = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "EUR",
});

const showValueToConvert = () => {
  const value = parseFloat(inputValue.value);
  if (Number.isNaN(value)) {
    return;
  } else {
    currentCurrency.textContent = formatToReal.format(value);
  }
};

const convertValues = async() => {
  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  const value = parseFloat(inputValue.value);
  showValueToConvert();

  // VALOR DEFAULT
  if(inputValue.value === "") {
    currentCurrency.textContent = formatToReal.format(0)
    currentCurrencyToConvert.textContent = formatToDolar.format(0)
    FlagConverted.src = "./assets/estados-unidos.png"
    currencyValueToConvert.value = "dolar"
  }


  if (Number.isNaN(value)) {
    return;
  }

  switch (currencyValueToConvert.value) {
    case "dolar":
      const valueDolar = value / data.USDBRL.high;
      currentCurrencyToConvert.textContent = formatToDolar.format(valueDolar);
      FlagConverted.src = "./assets/estados-unidos.png";
      break;

    case "euro":
      const valueEuro = value / data.EURBRL.high;
      currentCurrencyToConvert.textContent = formatToEuro.format(valueEuro);
      FlagConverted.src = "./assets/euro.png";
      break;

    default:
      currentCurrencyToConvert.textContent = "";
      break;
  }
};

// convertButton.addEventListener("click", convertValues);
currencyValueToConvert.addEventListener("change", convertValues);
inputValue.addEventListener("input", convertValues);
