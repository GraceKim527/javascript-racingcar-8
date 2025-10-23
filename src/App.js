import { getCarNames } from "./input/getCarNames.js";
import { validateCarNames } from "./input/validateCarNames.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      validateCarNames(carNames);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
