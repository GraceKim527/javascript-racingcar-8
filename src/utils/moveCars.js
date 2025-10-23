/**
 * utils/moveCars.js
 * 자동차들 전진 처리를 수행하는 함수
 */

import { shouldMove } from "./shouldMove.js";

export function moveCars(cars) {
  cars.forEach((car) => {
    if (shouldMove()) {
      car.position += 1;
    }
  });
}
