import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GooglePlayLink, PLAY_STORE_URL } from "./GooglePlayLink";

describe("GooglePlayLink", () => {
  afterEach(() => {
    delete window.oaiq;
  });

  it("measures one conversion for one click and preserves the destination", () => {
    const oaiq = vi.fn();
    window.oaiq = oaiq;
    render(<GooglePlayLink target="_blank" onClick={(event) => event.preventDefault()}>Get the app</GooglePlayLink>);
    const link = screen.getByRole("link", { name: "Get the app" });
    expect(link).toHaveAttribute("href", PLAY_STORE_URL);
    fireEvent.click(link);
    expect(oaiq).toHaveBeenCalledTimes(1);
    expect(oaiq).toHaveBeenCalledWith("measure", "lead_created", {
      type: "customer_action",
    });
  });

  it("keeps the Google Play link usable when the pixel is unavailable", () => {
    render(<GooglePlayLink>Download</GooglePlayLink>);
    expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute("href", PLAY_STORE_URL);
  });

  it("does not track unrelated links", () => {
    const oaiq = vi.fn();
    window.oaiq = oaiq;
    render(<a href="/privacy" onClick={(event) => event.preventDefault()}>Privacy</a>);
    fireEvent.click(screen.getByRole("link", { name: "Privacy" }));
    expect(oaiq).not.toHaveBeenCalled();
  });
});
