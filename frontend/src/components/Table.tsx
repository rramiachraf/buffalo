import { styled } from "linaria/react";
import { colors } from "../styles/colors";

export const Table = styled.table`
  border: 1px solid ${colors.lighterGray};
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0px 3px 2px ${colors.lighterGray};
  th {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem;
    border: 1px solid ${colors.lighterGray};
    border-radius: 3px;
    padding: 1rem;
    color: ${colors.main};
    font-weight: 700;
  }
  td {
    font-size: 1.4rem;
    text-align: center;
    border: 1px solid ${colors.lighterGray};
    padding: 1rem;
    color: ${colors.lightBlack};
    border-radius: 3px;
  }
`