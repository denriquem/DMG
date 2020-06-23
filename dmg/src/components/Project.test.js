import Project from "./Project";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  wrapper = setup(Project);
});

describe("Project", () => {
  it("succesfully renders the navbar", () => {
    expect(wrapper).toHaveLength(1);
  });
});
