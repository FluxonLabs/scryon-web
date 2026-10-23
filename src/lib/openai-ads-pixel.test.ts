import { describe, expect, it } from "vitest";
import { createOpenAIAdsPixelScript, isOpenAIAdsDebugEnabled } from "./openai-ads-pixel";

describe("OpenAI Ads pixel initialization", () => {
  it("initializes once without measuring a conversion", () => {
    const script = createOpenAIAdsPixelScript("pixel-test", false);
    expect(script.match(/oaiq\(\"init\"/g)).toHaveLength(1);
    expect(script).not.toContain('"measure"');
    expect(script).toContain("if(w.oaiq)return");
  });

  it("forces debug off in production", () => {
    expect(isOpenAIAdsDebugEnabled({ nodeEnv: "production", deploymentEnv: "production" })).toBe(false);
  });

  it("allows debug in development and staging", () => {
    expect(isOpenAIAdsDebugEnabled({ nodeEnv: "development" })).toBe(true);
    expect(isOpenAIAdsDebugEnabled({ nodeEnv: "production", deploymentEnv: "staging" })).toBe(true);
  });
});

