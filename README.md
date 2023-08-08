# React Draggable Component

A simple and lightweight component for making elements draggable.

# Installation

```shell
$ npm install obe-react-drag
# yarn add drag-react
```

# Example

```jsx
import { Draggable } from 'obe-react-drag';

<Draggable>
  <div>My element is draggable now</div>
</Draggable>

<Draggable disabled>
  <div>My element is NOT draggable now</div>
</Draggable>
```

### Props

| name         | type                   | default                                                                            | description                            |
| ------------ | ---------------------- | ---------------------------------------------------------------------------------- | -------------------------------------- |
| children     | `any`                  | `-`                                                                                | `Some element`                         |
| className?   | `string`               | `'drag-react'`                                                                     | `Class name for drag wrapper`          |
| style?       | `Object`               | `{ position: 'fixed', left: '10px', top: '10px', zIndex: 99999 , cursor: 'move' }` | `css style for drag wrapper`           |
| onDragStart? | `(_: DOMRect) => void` | `-`                                                                                | `Called whenever the user mouses down` |
| onDragEnd?   | `(_: DOMRect) => void` | `-`                                                                                | `Called when dragging stops`           |
| disabled?    | `bool`                 | `false`                                                                            | `Disable the draggable`                |
