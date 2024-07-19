import styled from "styled-components";
import { color, radius,textSize } from "../assets";


const light = `
   background-color: ${color.light};
   color: ${color.dark};
`;
const dark = `
   background-color: ${color.dark};
   color: ${color.light};
`;

export const Button = styled.button`
  font-size: ${textSize.button};
  font-weight: 500;
  padding: 6px 16px;
  cursor: pointer;
  border: none;
  border-radius: ${radius.round};
  text-transform: ${(p) => p.transform};
  margin: ${(p) => p.margin};
  margin-top: ${(p) => p.margin_top};
  margin-bottom: ${(p) => p.margin_bottom};
  margin-left: ${(p) => p.margin_left};
  margin-right: ${(p) => p.margin_right};
  font-family: Inter;
  ${(p) => {
    if (p.light) return `${light}`;
  }}
  ${(p) => {
    if (p.dark) return `${dark}`;
  }}
`;

export const Pill = styled.button`
  font-size: 10px;
  font-weight: 500;
  padding: 4px 9px;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
  border: none;
  border-radius: ${radius.round};
  font-family: Inter;
  ${(p) => {
    if (p.dark) return `${dark}`;
  }}
  ${(p) => {
    if (p.light) return `${light}`;
  }}
`;