/**
 * input/getCarNames.js
 * 사용자로부터 자동차 이름을 입력 받는 함수
 */

import { MissionUtils } from "@woowacourse/mission-utils";

export async function getCarNames() {
  const input = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
  );
  const carNames = input.split(",");
  return carNames;
}
