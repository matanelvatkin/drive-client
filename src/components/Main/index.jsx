import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, openDir } from '../../redux/reducer';
export default function Main() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const dir = useSelector(state => state.directory)
    const handleIncrement = () => {
        dispatch(increment());
        dispatch(openDir({root:"m/"+counter, documents:[...dir.documents,counter]}))
      };
    
      const handleDecrement = () => {
        dispatch(decrement());
      };
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        {counter}
        <button onClick={handleDecrement}>-</button>
        {dir.root}
        {dir.documents.map((v)=><div>{v}</div>)}
    </div>
  )
}
