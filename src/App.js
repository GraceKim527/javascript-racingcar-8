import { getCarNames } from "./input/getCarNames.js";
import { validateCarNames } from "./input/validateCarNames.js";
import { getTryCount } from "./input/getTryCount.js";
import { validateTryCount } from "./input/validateTryCount.js";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      validateCarNames(carNames);
      const tryCount = await getTryCount();
      validateTryCount(tryCount);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
