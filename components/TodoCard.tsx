'use client';
import { Todo, TypedColumn } from '@/typings';
import { XCircleIcon } from '@heroicons/react/24/solid';
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

type TodoCardProps = {
  id: TypedColumn;
  todo: Todo;
  index: number;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  innerRef: (element: HTMLElement | null) => void;
};

function TodoCard({
  id,
  todo,
  index,
  dragHandleProps,
  draggableProps,
  innerRef,
}: TodoCardProps) {
  return (
    <div
      className='space-y-2 bg-white rounded-md drop-shadow-md'
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}>
      <div className='flex items-center justify-between p-5'>
        <p className=''>{todo.title}</p>
        <button className='text-red-500 hover:text-red-600'>
          <XCircleIcon className='w-8 h-8 ml-5' />
        </button>
      </div>
      {/* Add Image here... */}
      {/* {imageU} */}
    </div>
  );
}

export default TodoCard;
