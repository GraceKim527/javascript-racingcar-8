import { getCarNames } from "./input/getCarNames.js";
import { validateCarNames } from "./input/validateCarNames.js";
import { getTryCount } from "./input/getTryCount.js";
import { validateTryCount } from "./input/validateTryCount.js";
import { moveCars } from "./utils/moveCars.js";
import { getWinners } from "./utils/getWinners.js";
import { printWinners } from "./output/printWinners.js";
import { printRaceStep } from "./output/printRaceStep.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 입력 값들 검증
      const carNames = await getCarNames();
      validateCarNames(carNames);
      const tryCount = await getTryCount();
      validateTryCount(tryCount);

      // 실행 결과
      MissionUtils.Console.print("\n실행 결과");
      const cars = carNames.map((name) => ({ name, position: 0 }));
      for (let i = 0; i < tryCount; i++) {
        moveCars(cars);
        printRaceStep(cars);
      }

      // 우승자 출력
      const winners = getWinners(cars);
      printWinners(winners);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default App;
