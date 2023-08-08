import React from 'react';
import Draggable from './Draggable';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Draggable> = {
  title: 'Draggable',
  component: Draggable,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Draggable>;

export const Single: Story = {
  render: ({ ...args }) => (
    <Draggable
      {...args}
      onDragStart={(rect: DOMRect) => {
        console.log('onDragStart => ', rect);
      }}
      onDragEnd={(rect: DOMRect) => {
        console.log('onDragEnd => ', rect);
      }}
    >
      <div>Draggable</div>
    </Draggable>
  ),
};

export const Multiple: Story = {
  render: ({ ...args }) => (
    <main>
      <Draggable
        {...args}
        onDragStart={(rect: DOMRect) => {
          console.log('onDragStart => ', rect);
        }}
      >
        <div>Draggable 1</div>
      </Draggable>

      <Draggable {...args} style={{ left: '200px', top: '200px' }}>
        <div style={{ backgroundColor: '#2196f3' }}>Draggable 2</div>
      </Draggable>
    </main>
  ),
};

// export const Single = () => (
//   <Draggable
//     onDragStart={(rect: DOMRect) => {
//       console.log('onDragStart => ', rect);
//     }}
//     onDragEnd={(rect: DOMRect) => {
//       console.log('onDragEnd => ', rect);
//     }}
//   >
//     <div>Draggable</div>
//   </Draggable>
// );

// export const Multiple = () => (
//   <main>
//     <Draggable
//       onDragStart={(rect: DOMRect) => {
//         console.log('onDragStart => ', rect);
//       }}
//     >
//       <div>Draggable 1</div>
//     </Draggable>

//     <Draggable style={{ left: '200px', top: '200px' }}>
//       <div style={{ backgroundColor: '#2196f3' }}>Draggable 2</div>
//     </Draggable>
//   </main>
// );
