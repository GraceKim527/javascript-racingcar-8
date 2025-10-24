/**
 * input/__test__/validateTryCount.test.js
 * 시도할 횟수를 검증하는 함수 테스트
 */

import { validateTryCount } from "../validateTryCount.js";

describe("시도할 횟수 유효성 검사", () => {
  test("정상적인 횟수는 통과한다", () => {
    expect(() => validateTryCount("1")).not.toThrow();
  });
  test("0이 입력될 경우 에러를 던진다", () => {
    expect(() => validateTryCount("0")).toThrow("[ERROR]");
  });
  test("소수가 입력될 경우 에러를 던진다", () => {
    expect(() => validateTryCount("0.5")).toThrow("[ERROR]");
  });
  test("음수가 입력될 경우 에러를 던진다", () => {
    expect(() => validateTryCount("-1")).toThrow("[ERROR]");
  });
  test("빈 문자열이 입력될 경우 에러를 던진다", () => {
    expect(() => validateTryCount("")).toThrow("[ERROR]");
  });
  test("숫자가 아닌 문자열이 입력될 경우 에러를 던진다", () => {
    expect(() => validateTryCount("abc")).toThrow("[ERROR]");
  });
});
