
import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export default function Draggable(props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    

  
  return (
    <div ref={setNodeRef} className='w-[25%] h-[25%] m-4 p-4 bg-red-200' style={style} {...listeners} {...attributes}>
        Draggable
    </div>
  );
}