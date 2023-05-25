// @ts-check
const lint = require("@commitlint/lint").default;
const conventionalRules = require("@commitlint/config-conventional").rules;
const rules = require("./index").rules;
const config = { ...conventionalRules, ...rules };

describe("commitlint configuration", () => {
  it("accepts a valid commit", async () => {
    // @ts-ignore
    const { valid } = await lint("feat: a valid commit message", config);
    expect(valid).toBe(true);
  });

  describe("config-conventional rules", () => {
    it("rejects a commit with an invalid type", async () => {
      // @ts-ignore
      const { valid } = await lint("invalid: an invalid commit message", config);
      expect(valid).toBe(false);
    });

    it("rejects a commit with an invalid type case", async () => {
      // @ts-ignore
      const { valid } = await lint("FIX: an invalid commit message", config);
      expect(valid).toBe(false);
    });
  });

  describe("custom rules", () => {
    it("accepts a commit with a long body", async () => {
      const { valid } = await lint(
        "feat: a valid commit message\n\nThis is a long body that exceeds the 100 character limit",
        // @ts-ignore
        config
      );
      expect(valid).toBe(true);
    });

    it("accepts a commit with a long footer", async () => {
      const { valid } = await lint(
        "feat: a valid commit message\n\nThis is a long body that exceeds the 100 character limit\n\nFooter: This is a long footer that exceeds the 100 character limit",
        // @ts-ignore
        config
      );
      expect(valid).toBe(true);
    });
  });
});
