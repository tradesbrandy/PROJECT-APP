import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import AddProject from "../components/Project";

describe("Project", () => {
  it("renders the Add Project form", () => {
    render(<AddProject onProject={vi.fn()} />);

    expect(
      screen.getByRole("heading", {
        name: /project/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /add/i,
      })
    ).toBeInTheDocument();
  });

  it("", async () => {
    const user = userEvent.setup();
    const onProject = vi.fn();

    render(
      <Project onProject={onProject} />
    );

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput =
      screen.getByLabelText(/description/i);

    await user.type(titleInput, "My Project");
    await user.type(
      descriptionInput,
      ""
    );

    await user.click(
      screen.getByRole("button", {
        name: /add/i,
      })
    );

    expect(onProject).toHaveBeenCalledWith(
      "",
      
    );
  });
});