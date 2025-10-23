/**
 * input/getTryCount.js
 * 사용자로부터 시도할 휫수를 입력 받는 함수
 */

import { MissionUtils } from "@woowacourse/mission-utils";

export async function getTryCount() {
  const input = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요? \n"
  );
  return input;
}
