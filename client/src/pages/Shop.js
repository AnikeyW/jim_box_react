import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/testSlice';

const Shop = () => {
   const dispatch = useDispatch()
   const count = useSelector(state => state.testReducer.count)
   return (
      <div>
         Count: {count}
         <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>deccrement</button>
         </div>
      </div>
   );
};

export default Shop;