import About from "./About";
import { setup } from "./../testHelpers";

let wrapper = setup(About);

describe("About", () => {
  it("should succesfully render the about component", () => {
    expect(wrapper).toHaveLength(1);
  });
});
