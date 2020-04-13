/* Todos */
interface Todo {
  id: number;
  name: string;
  desc: string;
  dateCreated: moment.Moment;
  exp: {
    has: boolean;
    date: moment.Moment;
  };
}

type TodoList = Todo[];

type SetTodoList = Dispatch<SetStateAction<Todo[]>> | null;

/* Menus */
interface MenuOption {
  uuid: string;
  desc: string;
  path: string;
  icon: string;
}

type MenuOptions = MenuOption[];
