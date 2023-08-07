import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns the current year", () => {
  expect(getFullYear()).toBe(new Date().getFullYear());
});

test("returns the correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns correct notification message", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
