import { navItems, getSectionContent } from "./SectionContents";

describe("getSectionContent", () => {
  it("returns some content", () => {
    navItems.forEach((i) => {
      expect(getSectionContent(i)).toBeDefined();
    });
  });

  it("returns empty content", () => {
    expect(getSectionContent(123)).toEqual("");
  });
});
