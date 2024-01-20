import { RecoilRoot, useRecoilState } from 'recoil';
import './App.css';
import { todosAtomFamily } from './atoms';

const todoAtom=atom({
  key:"todoAtom",
  default:
})

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
