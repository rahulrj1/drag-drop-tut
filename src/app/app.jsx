import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import dynamic from 'next/dynamic';

import Droppable from './Droppable';
// import Draggable from './Draggable';

const Draggable = dynamic(()=> import('./Draggable'), {
    ssr: false,
})

// const Droppable = dynamic(()=> import('./Droppable'), {
//     ssr: false,
// })

export default function App() {
    const handleDragEnd = (event) => {
        if (event.over && event.over.id === 'droppable') {
        // setIsDropped(true);
            console.log("Set is dropped to true")
        }
    }
  
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Draggable />
      <Droppable />
    </DndContext>
  );
}