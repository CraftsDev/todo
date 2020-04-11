interface MakeStyleClasses {
  classes: ClassNameMap<string>;
}

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
