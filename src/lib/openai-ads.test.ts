import { afterEach, describe, expect, it, vi } from "vitest";
import { trackGooglePlayCta, trackOpenAIConversion } from "./openai-ads";

describe("OpenAI Ads conversion tracking", () => {
  afterEach(() => {
    delete window.oaiq;
  });

  it("does not measure anything during an ordinary module load", () => {
    const oaiq = vi.fn();
    window.oaiq = oaiq;
    expect(oaiq).not.toHaveBeenCalled();
  });

  it("sends the Google Play conversion exactly once with non-sensitive properties", () => {
    const oaiq = vi.fn();
    window.oaiq = oaiq;
    trackGooglePlayCta();
    expect(oaiq).toHaveBeenCalledTimes(1);
    expect(oaiq).toHaveBeenCalledWith("measure", "lead_created", {
      type: "customer_action",
    });
  });

  it("drops personal and call-related property keys", () => {
    const oaiq = vi.fn();
    window.oaiq = oaiq;
    trackOpenAIConversion("lead_created", {
      type: "customer_action",
      email: "person@example.com",
      transcriptText: "private",
      callId: "private",
    });
    expect(oaiq).toHaveBeenCalledWith("measure", "lead_created", {
      type: "customer_action",
    });
  });

  it("does not throw when the pixel is unavailable or fails", () => {
    expect(() => trackGooglePlayCta()).not.toThrow();
    window.oaiq = vi.fn(() => { throw new Error("blocked"); });
    expect(() => trackGooglePlayCta()).not.toThrow();
  });
});

