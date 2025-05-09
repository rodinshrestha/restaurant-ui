import styled from "styled-components";

import { maxMediaQuery } from "@/theme/utils";
import { theme } from "@/theme";

export const StyledSection = styled.section`
  padding-bottom: 3em;

  ${maxMediaQuery("md")} {
    padding-top: 0;
  }

  .ourstory-title {
    font-size: 48px;
    font-family: inherit;
    line-height: 48px;
  }

  .our-story-wrapper {
    margin-top: 40px;
    color: ${theme.color.primary};
    display: flex;
    flex-direction: column;
    gap: 10px;

    ${maxMediaQuery("md")} {
      gap: 10px;
    }
  }
`;
