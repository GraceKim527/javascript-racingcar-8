/**
 * input/__test__/validateCarNames.test.js
 * 자동차 이름을 검증하는 함수 테스트
 */

import { validateCarNames } from "../validateCarNames.js";

describe("자동차 이름 유효성 검사", () => {
  test("정상적인 이름 배열은 통과한다", () => {
    expect(() => validateCarNames(["pobi", "woni", "jun"])).not.toThrow();
  });

  test("이름이 5자를 초과하면 에러를 던진다", () => {
    expect(() => validateCarNames(["pobi", "longname"])).toThrow("[ERROR]");
  });

  test("숫자가 포함되면 에러를 던진다", () => {
    expect(() => validateCarNames(["po1bi", "woni"])).toThrow("[ERROR]");
  });

  test("중복된 이름이 있으면 에러를 던진다", () => {
    expect(() => validateCarNames(["pobi", "pobi"])).toThrow("[ERROR]");
  });

  test("특수문자가 포함되면 에러를 던진다", () => {
    expect(() => validateCarNames(["po#bi", "woni"])).toThrow("[ERROR]");
  });
});
