/**
 * utils/__tests__/getWinners.test.js
 * 우승자를 찾는 함수 테스트
 */

import { getWinners } from "../getWinners.js";

describe("우승자 찾기", () => {
  test("우승자를 찾는 함수는 자동차 이름과 위치를 인자로 받아 우승자를 찾는다", () => {
    const cars = [
      { name: "pobi", position: 0 },
      { name: "woni", position: 5 },
      { name: "jun", position: 2 },
      { name: "ho", position: 3 },
    ];
    const winners = getWinners(cars);
    expect(winners).toEqual(["woni"]);
  });
});
