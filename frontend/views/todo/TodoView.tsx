import type Todo from '../../../frontend/generated/com/example/application/Todo.js';
import { useEffect, useState } from 'react';

import { Button } from '@hilla/react-components/Button.js';
import { Checkbox } from '@hilla/react-components/Checkbox.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { TodoEndpoint } from '../../../frontend/generated/endpoints.js';
import { TodoEndpoint as TodoEndpointType } from '../../../frontend/generated/endpoints.js';


export default function TodoView() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');


  useEffect(() => {
    TodoEndpoint.findAll().then(setTodos);
  }, []);


  async function addTodo(){
    const saved = await TodoEndpoint.add(task);
    if(saved){
      setTodos([...todos, saved]);
      setTask('');
    }
  }

  async function updateTodo(todo: Todo, done: boolean) {
    const saved = await TodoEndpoint.update({ 
      ...todo, done
    });
    if(saved){ 
      setTodos(todos.map(existing => existing.id === saved.id ? saved : existing));
    }
  }

  return (
    <>
    <h1 className="m-m">Todo</h1>
      <div className="m-m flex items-baseline gap-m">
        <TextField value={task} onChange={ e => setTask(e.target.value)}  ></TextField>
        <Button
          theme="primary"
          onClick={addTodo}
        >Add</Button>
      </div>

      <div className="m-m flex flex-col items-stretch gap-s">
        {todos.map(todo => (
          <div key={todo.id}> 
          <Checkbox
            checked={todo.done}
            onCheckedChanged={e => updateTodo(todo, e.detail.value)}>
            {todo.task}
          </Checkbox>
          <span>{todo.task}</span>
          </div>
        ))}
      </div>
    </>
  );
}