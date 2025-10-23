import { getCarNames } from "./input/getCarNames.js";
import { validateCarNames } from "./input/validateCarNames.js";
import { getTryCount } from "./input/getTryCount.js";
import { validateTryCount } from "./input/validateTryCount.js";
import { moveCars } from "./utils/moveCars.js";
import { printRaceStep } from "./output/printRaceStep.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await getCarNames();
      validateCarNames(carNames);
      const tryCount = await getTryCount();
      validateTryCount(tryCount);

      MissionUtils.Console.print("\n실행 결과");
      const cars = carNames.map((name) => ({ name, position: 0 }));
      for (let i = 0; i < tryCount; i++) {
        moveCars(cars);
        printRaceStep(cars);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
