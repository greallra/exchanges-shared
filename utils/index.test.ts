import { isFirebaseId } from './index'

describe("Math functions", () => {
  it("should add two numbers correctly", () => {
    expect(isFirebaseId("ss")).toBe(false);
  });
});