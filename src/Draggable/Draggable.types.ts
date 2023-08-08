import React from "react";

export interface IDraggable {
  children: JSX.Element[] | JSX.Element;
  style?: Object;
  className?: string;
  onDragStart?: (o: DOMRect) => void;
  onDragEnd?: (o: DOMRect) => void;
  disabled?: boolean;
}