import Projects from "./Projects";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  wrapper = setup(Projects);
});

describe("Projects", () => {
  it("succesfully renders the navbar", () => {
    expect(wrapper).toHaveLength(1);
  });
});
