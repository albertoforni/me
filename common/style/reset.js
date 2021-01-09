import "glamor/reset";
import { insertRule } from "glamor";

insertRule(`
html {
  box-sizing: border-box;
  font-size: 62.5%;
}
`);

insertRule(`
*, *:before, *:after {
  box-sizing: inherit;
}
`);

insertRule(`
body { font-size: 1.6rem; }
`);
