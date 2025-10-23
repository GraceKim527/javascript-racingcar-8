import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    console.log(number);
  }
}

export default App;
