import { useState, useRef } from 'react';

/**
 * Custom hook that creates a gradient background that changes
 * based on the mouse or touch position
 * @param T - The type of element the ref will be applied to
 * @returns - An array that contains the gradient style string, an object with two properties:
 * onMouseMove and onTouchMove, and a ref object that can be applied to an element.
 */
const useGradient = <T extends HTMLElement>(): [
  string,
  {
    onMouseMove: (e: React.MouseEvent<T, MouseEvent>) => void;
    onTouchMove: (e: React.TouchEvent<T>) => void;
  },
  React.MutableRefObject<T | null>
] => {
  // State variable that holds the current gradient value
  const [gradient, setGradient] = useState<string>('');
  // Ref object that can be applied to an element
  const ref = useRef<T>(null);

  /**
   * Event handler that updates the gradient value
   * based on the mouse position
   * @param e - MouseEvent
   */
  const handleMouseMove = (e: React.MouseEvent<T, MouseEvent>) => {
    // get the bounding client rect of the element the ref is applied to
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      // update the gradient state variable
      setGradient(
        `radial-gradient(circle at ${e.clientX - rect.left}px ${
          e.clientY - rect.top
        }px, #ffDD4a, #ff9000)`
      );
    }
  };

  /**
   * Event handler that updates the gradient value
   * based on the touch position
   * @param e - TouchEvent
   */
  const handleTouchMove = (e: React.TouchEvent<T>) => {
    // get the bounding client rect of the element the ref is applied to
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      // update the gradient state variable
      setGradient(
        `radial-gradient(circle at ${
          e.touches[0].clientX - rect.left
        }px ${e.touches[0].clientY - rect.top}px, #ffDD4a, #ff9000)`
      );
    }
  };

  // return the gradient, the object with the event handlers and the ref object
  return [
    gradient,
    {
      onMouseMove: handleMouseMove,
      onTouchMove: handleTouchMove,
    },
    ref,
  ];
};

export default useGradient;
