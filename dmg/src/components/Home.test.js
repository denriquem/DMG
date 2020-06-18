import Home from "./Home";
import { setup } from "./../testHelpers";

let wrapper;
beforeEach(() => {
  wrapper = setup(Home);
});

describe("Home", () => {
  it("should render the home component without errors", () => {
    expect(wrapper).toHaveLength(1);
  });
});
