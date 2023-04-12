import axios from "axios";
import { useState } from "react";

const CreateToDo = ({getToDoList}) => {
    const [title, setTitle] = useState ("");

    const onSubmitCreateTodo = async (e) => {
        try {
            e.preventDefault(); //새로고침 방지용

            if (!title) {
                //버튼 클릭했는데 아무것도 입력이 안되어 있을때
                alert("타이틀을 입력해주세요!");
                return;
              }
              
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
        // console.log(response);

            getToDoList();
            setTitle("");    
            
        } catch (error) {
            console.error(error);
        }
    };

     return (
      <form className="flex mt-2" onSubmit={onSubmitCreateTodo}>
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
  };
  
  export default CreateToDo;