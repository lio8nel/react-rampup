import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Members } from "./Members";

describe("Members", () => {
  it("should render", () => {
    render(<Members />);
    expect(
      screen.getByRole("list", { name: /members list/i })
    ).toBeInTheDocument();
  });

  it("fetches and render a list of members", async () => {
    const members = [{ firstName: "John", lastName: "Doe", active: true }];
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(members),
      })
    );
    render(<Members />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });
});
