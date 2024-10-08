import { useCallback, useState } from "react";
import { MdAdd, MdAddCircleOutline } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");

  //const onChange = (e) => setValue(e.target.value);
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
        {/* <MdAddCircleOutline /> */}
      </button>
    </form>
  );
};

export default TodoInsert;
