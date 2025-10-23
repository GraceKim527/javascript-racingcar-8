/**
 * output/printWinners.js
 * 우승자를 찾는 함수
 */

import { MissionUtils } from "@woowacourse/mission-utils";

export function printWinners(winners) {
  MissionUtils.Console.print(`최종 우승자: ${winners.join(", ")}`);
}
