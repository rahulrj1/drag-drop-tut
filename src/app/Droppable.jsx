
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export default function Droppable(props) {

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });
      const style = {
        backgroundColor: isOver ? 'lightgreen' : undefined,
      };
  
  return (
    <div ref={setNodeRef} className='w-[25%] h-[25%] m-4 p-4 bg-indigo-200' style={style}>
      Droppable
    </div>
  );
}