import { atomFamily } from "recoil";
import { TODOS } from "./todos";

//soft coded part using  .find which is clean
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});
//hard coded part
/*export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    const foundTodo=null;
    for(let i=0;i<TODOS.length;i++){
      if(TODOS[i].id===id){
        foundTodo=TODOS[i];
      }
      return foundTodo;
    }
  },
});*/