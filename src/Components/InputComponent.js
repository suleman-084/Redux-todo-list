import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  addInputList,
  deleteFromInputList,
} from "../slice/inputSlice";

const InputComponent = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.inputValue);
  const inputList = useSelector((state) => state.input.inputList);
  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };
  const handleAdd = () => {
    dispatch(addInputList());
  };
  const handleDelete = (item) => {
    dispatch(deleteFromInputList(item));
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {inputList.map((item) => (
          <li key={item} onClick={() => handleDelete(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InputComponent;
