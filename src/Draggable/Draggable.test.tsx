import React from 'react';
import { render } from '@testing-library/react';

import Draggable from './Draggable';
import { IDraggable } from './Draggable.types';

describe('Draggable', () => {
  const renderComponent = ({ disabled }: Partial<IDraggable>) =>
    render(
      <Draggable disabled={disabled}>
        <div>Draggable</div>
      </Draggable>
    );

  it('should render draggable correctly', () => {
    const disabled = false;

    const { getByTestId } = renderComponent({ disabled });

    const draggableComponent = getByTestId('draggable__enabled');

    expect(draggableComponent).toBeInTheDocument();
  });
});
