import { style, insertRule } from "glamor";
import "./reset";

const List = {
  noStyle: style({
    padding: 0,
    listStyle: "none",
  }),
};

const Button = {
  noStyle: style({
    border: 0,
    padding: 0,
    background: "none",
    outline: 0,
  }),
};

const Colors = {
  green: "#02b875",
  white: "#fff",
  black: "rgba(0,0,0,0.8)",
  lightGray: "rgba(0,0,0,.44)",
};

const MediaQueries = {
  small: "@media only screen and (max-device-width: 667px)",
  medium:
    "@media only screen and (min-device-width : 668px) and (max-device-width : 1024px)",
};

insertRule(`
body {
  color: ${Colors.black};
}
`);

insertRule(`
a {
  color: ${Colors.green};
  text-decoration: none;
}
`);

insertRule(`
${MediaQueries.small} { 
  html {
    font-size: 50%;
  }
}
`);

export { List, Button, Colors, MediaQueries };
