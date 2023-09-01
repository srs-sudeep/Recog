import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useMousePosition from '../utils/useMousePointer';
import { lerp } from '../utils/utils';

const Style = styled.svg`
  /* Hide on mobile */
  display: none;

  @media (min-width: 480px) {
    z-index: 99999998;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    opacity: 1;
    pointer-events: none;
    backface-visibility: hidden;
    transform: translate3d(-1em, -1em, 0);
    transition: all 0.5s ${({ theme }) => theme.transitions.easeOutExpo};

    circle {
      fill: #000000;
    }
  }

  ${({ hover }) =>
    hover &&
    `
    @media (any-pointer: fine) {
      opacity: 0.2;
    }
  `};
`;

const Cursor = ({ hover }) => {
  const cursorRef = useRef();
  const { mouseX, mouseY } = useMousePosition();
  const hasMovedCursor =
    typeof mouseX === 'number' && typeof mouseY === 'number';
  const hoverScale = 4;

  useEffect(() => {
    if (hasMovedCursor) {
      const bounds = cursorRef.current.getBoundingClientRect();
      const x = mouseX - bounds.width / (hover ? hoverScale * 2 : 2);
      const y = mouseY - bounds.height / (hover ? hoverScale * 2 : 2);

      cursorRef.current.style.transform = `translateX(${x}px) translateY(${y}px) scale(${
        hover ? hoverScale : 1
      })`;
    }
  }, [hover, mouseX, mouseY, hasMovedCursor]);

  return (
    <Style
      ref={cursorRef}
      hover={hover}
      width={25}
      height={25}
      viewBox="0 0 25 25"
    >
      <circle cx="12.5" cy="12.5" r="6.25" />
    </Style>
  );
};

export default Cursor;
