// @ts-ignore
import * as React from "react";
// @ts-ignore
import styled, { StyledComponentClass } from "styled-components";

export const StyledAthleteTable = styled.table`
  margin: 40px;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
`;

export const StyledAthleteTableRow = styled.tr`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const StyledAthleteTableHeader = styled(StyledAthleteTableRow)`
  background-color: #1890ff;
`;

export const StyledAthleteTableCell = styled.th`
  padding: 12px 8px;
  text-align: left;
  color: #000000a6;
`;

export const StyledAthleteTableCellRed = styled(StyledAthleteTableCell)`
  background-color: #dc143c;
  color: white;
`;

export const StyledAthleteTableCellOrange = styled(StyledAthleteTableCell)`
  background-color: #ff7f50;
  color: white;
`;

export const StyledAthleteTableCellGreen = styled(StyledAthleteTableCell)`
  background-color: #98fb98;
  color: white;
`;

export const StyledAthleteTableHeaderCell = styled(StyledAthleteTableCell)`
  color: white;
`;
