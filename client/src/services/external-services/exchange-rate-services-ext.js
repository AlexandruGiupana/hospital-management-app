import axios from "axios";

export const getExchangeRate = async () => {
  try {
    return await axios.get(
      "http://api.exchangeratesapi.io/v1/latest?access_key=0ec234479cedffda14adc018c1ef6722&symbols=USD,AUD,CAD,PLN,MXN&format=1"
    );
  } catch (err) {
    throw err;
  }
};
