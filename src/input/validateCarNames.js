/**
 * input/validateCarNames.js
 * 자동차 이름을 검증하는 함수
 */

export function validateCarNames(carNames) {
  if (carNames.some((name) => name.trim().length === 0)) {
    throw new Error("[ERROR] 빈 이름은 사용할 수 없습니다.");
  }
  if (carNames.length < 2) {
    throw new Error("[ERROR] 자동차 이름은 최소 2개 이상이어야 합니다.");
  }
  if (carNames.some((name) => name.trim().length > 5)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  }

  if (carNames.some((name) => carNames.filter((n) => n === name).length > 1)) {
    throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
  }
  const invalidName = carNames.find((name) => !/^[a-zA-Z]+$/.test(name.trim()));
  if (invalidName) {
    throw new Error("[ERROR] 자동차 이름은 영문 알파벳만 가능합니다");
  }
}
