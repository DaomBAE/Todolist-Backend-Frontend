import axios from "axios";
import { useState } from "react";
import TodoCard from "./TodoCard";

    const onSubmitChangeTodo = async (e) => {
        try {              
              const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/todo`,
                {
                    title,
                    desc:`${title} 화이팅`
                }
              );
            if (response.status !== 200) {
                alert("요청을 불러오지 못했습니다.");
                return;
              }

            getToDoList();
            setTitle("");    
            
        } catch (error) {
            console.error(error);
        }
    };

     return (
      <form className="flex mt-2" onSubmit={onSubmitChangeTodo}>
        <input
          className="grow border-2 border-purple-200 rounded-lg focus:outline-purple-400 px-2 py-1 text-lg"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="ml-4 px-2 py-1 bg-purple-200 hover:bg-purple-400 rounded-lg text-gray-50"
          type="submit"
          value="Create New"
        />
      </form>
    );
  
  
  export default ChangeToDo;