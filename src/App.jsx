import axios from "axios";
import TodoCard from "./components/TodoCard";
import { useEffect, useState } from "react";
import CreateToDo from "./components/CreateTodo";

function App() {
  const [toDoList, setToDoList] = useState();

  const getToDoList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );

      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다.");
        return;
      }

      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl front-bold"> To Do List 📝 </h1>
      <div>
         <div className="mt-8 text-sm front-semibold">
           Think like a man of action and act like man of thought.
         </div>
         <div>
           행동하는 사람처럼 생각하고, 생각하는 사람처럼 행동하라
         </div>
         <CreateToDo getToDoList={getToDoList} />
         <ul className="mt-16 flex flex-col w-1/2">
             {toDoList && toDoList.map((v, i) => {
              return (
                // 다른 예 <TodoCard title ="테니스"/>
                  <TodoCard
                     key={i}
                     title={v.title}
                     isDone={v.isDone}
                     index={i}
                     getToDoList={getToDoList}
                />
              );
          })}
         </ul>
      </div>
    </div>
  );
}

export default App;
