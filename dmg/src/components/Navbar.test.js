import Navbar from "./Navbar";
import { setup } from "./../testHelpers";

let wrapper;

beforeEach(() => {
  wrapper = setup(Navbar);
});

describe("Navbar", () => {
  it("succesfully renders the navbar", () => {
    expect(wrapper).toHaveLength(1);
  });
});
