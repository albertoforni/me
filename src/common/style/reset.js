import 'glamor/reset';
import { insertRule } from 'glamor';

insertRule(`
/* apply a natural box layout model to all elements, but allowing components to change */
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html { font-size: 62.5%; }
body { font-size: 1.6rem; }
`);
