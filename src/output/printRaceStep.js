/**
 * output/printRaceStep.js
 * 자동차 경주 단계를 출력하는 함수
 */

import { MissionUtils } from "@woowacourse/mission-utils";
export function printRaceStep(cars) {
  cars.forEach((car) => {
    const dashes = "-".repeat(car.position);
    MissionUtils.Console.print(`${car.name} : ${dashes}`);
  });
  MissionUtils.Console.print("");
}
