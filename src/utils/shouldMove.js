/**
 * utils/shouldMove.js
 * 자동차 이동 여부를 결정하는 함수
 */

import { MissionUtils } from "@woowacourse/mission-utils";

export function shouldMove() {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  return number >= 4;
}
