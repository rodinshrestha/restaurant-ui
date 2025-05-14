import { FrameworkType } from "@/types/framework.types";

/**
 * Every framework has it different ref attributes for example href, to...
 * @param frameworkType GATSBY | NEXT |REACT
 * @returns
 */
export const getLinkAttributes = (frameworkType: FrameworkType) => {
  const linkAttributesMap: Record<FrameworkType, string> = {
    GATSBY: "to",
    NEXT: "href",
    REACT: "href",
  };

  return linkAttributesMap[frameworkType] ?? "to";
};
