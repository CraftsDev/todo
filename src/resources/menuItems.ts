import { v4 as uuid } from 'uuid';

export interface MenuOption {
  uuid: string;
  desc: string;
  path: string;
  icon: string;
}
export type MenuOptions = MenuOption[];

/* This value could come from an endpoint/service */
export default [
  //{ uuid: uuid(), desc: 'Read Todo Items', path: '/read-list', icon: 'list' }, // view-only
  { uuid: uuid(), desc: 'Todo List', path: '/edit-list', icon: 'list' },
  { uuid: uuid(), desc: 'New Todo', path: '/add', icon: 'add' },
] as MenuOptions;
