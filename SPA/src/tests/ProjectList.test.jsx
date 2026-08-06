import "@testing-library/jest-dom/vitest";
import {render,screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe,expect, it } from "vitest";
import ProjectList from "../Components/ProjectList";

const projects = [{
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application",
  },
];


describe("ProjectList",() =>{
    it("renders Projects"),() => {
        render(<ProjectList projects={projects}/>);
        expect(
            screen.getByText("")
        ).toBeInTheDocument();

        expect(
            screen.getByText("")
        ).toBeInTheDocument();
    };
    
    it(`filters projects using search`, async () => {
        const user =userEvent.setup();
        render(<ProjectList projects={projects}/>);

        const searchInput = 
        screen.getByPlaceholderText(/search projects/i);

        await user.type(searchInput,"");

        expect(
            screen.getByText("")
        ).toBeInTheDocument();

        expect(
            screen.queryByText("")
        ).not.toBeInTheDocument()
    });
});
