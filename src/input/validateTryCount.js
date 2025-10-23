/**
 * input/validateTryCount.js
 * 시도할 휫수를 검증하는 함수
 */

export function validateTryCount(tryCount) {
  const trimmed = tryCount.toString().trim();

  if (trimmed.length === 0) {
    throw new Error("[ERROR] 시도할 횟수를 입력해주세요.");
  }

  const tryCountNumber = Number(trimmed);

  if (!Number.isInteger(tryCountNumber) || tryCountNumber < 1) {
    throw new Error("[ERROR] 시도할 횟수는 양의 정수만 가능합니다.");
  }
}
