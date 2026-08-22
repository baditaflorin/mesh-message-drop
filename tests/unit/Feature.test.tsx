import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Feature } from "../../src/Feature";
vi.mock("@baditaflorin/mesh-common", async () => {
  const actual = await vi.importActual<object>("@baditaflorin/mesh-common");
  return {
    ...actual,
    useSharedMessages: () => ({ messages: [], send: () => true, remove: () => true }),
  };
});
describe("Message Drop", () => {
  it("offers a labeled message composer", () => {
    render(
      <Feature
        room={null}
        config={
          {
            appName: "Message Drop",
            description: "Chat",
            accentHex: "#000",
            version: "test",
            commit: "test",
          } as never
        }
      />,
    );
    expect(screen.getByLabelText("Your message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Drop message" })).toBeDisabled();
  });
});
