import { expect, describe, it } from "vitest";
import { containsDuplicate } from "./main";

describe("containsDuplicate", () => {
  it("returns true if array contains duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("returns false if array does not contain duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([7, 8, 9, 10, 100, 800, 305])).toBe(false);
  });

  it("returns false if array is empty", () => {
    expect(containsDuplicate([])).toBe(false);
  });
});
