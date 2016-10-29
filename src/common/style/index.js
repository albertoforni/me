import { style } from 'glamor';

const List = {
  noStyle: style({
    padding: 0,
    listStyle: 'none',
  }),
};

const Button = {
  noStyle: style({
    border: 0,
    padding: 0,
    background: 'none',
    outline: 0,
  }),
};

export { List, Button };
