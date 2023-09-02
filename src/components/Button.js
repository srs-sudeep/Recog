import React, { useRef, forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import useMousePosition from '../utils/useMousePointer';
import { distance } from '../utils/utils';

const Text = styled(motion.span)`
  display: block;

  &::before{
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.65s ${({ theme }) => theme.transitions.easeOutCirc};
  }

  // &::after {
  //   color: ${({ theme }) => theme.button.hover.color};
  //   transform: translate3d(-50%, 140%, 0);
  // }
`;

const Style = styled.a`
  position: relative;
  display: inline-flex;
  align-item:center;
  justify-content:center;
  border-radius: 50%;
  width: 190px;
  height: 190px;
  margin: 1em;
  padding: 1em 2em;
  font-size: 1.25em;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.button.default.color};
  background-color: #191919;
  border: 0px solid ${({ theme }) => theme.button.default.borderColor};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.75s ${({ theme }) => theme.transitions.easeOutCirc};

  /* Text wrapper */
  > span {
    z-index: 100;
    position: relative;
    color: transparent;
  }

  &:hover {
    border-color: #455ce9;

    // ${Text} {
    //   &::before {
    //     transform: translate3d(-50%, -300%, 0);
    //   }

      // &::after {
      //   color: ${({ theme }) => theme.button.hover.color};
      //   transform: translate3d(-50%, -50%, 0);
      // }
    // }
  }
`;

const Fill = styled(motion.div)`
  z-index: 10;
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 250%;
  display: block;
  border-radius: 50%;
  border-color: #455ce9;
  background: #455ce9;
  pointer-events: none;
  transform: translate3d(0, 80%, 0);
`;

const Button = forwardRef((props, ref) => {
  const { mouseX, mouseY } = useMousePosition();
  const textRef = useRef();
  const fillControls = useAnimation();

  useEffect(() => {
    let x = 0;
    let y = 0;

    if (ref) {
      const node = ref.current;

      // New values for the translations
      const rect = node.getBoundingClientRect();
      const distanceToTrigger = rect.width * 0.7;
      const distanceMouseButton = distance(
        mouseX + window.scrollX,
        mouseY + window.scrollY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );

      // Handle magnetic effect
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2;
        y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        textRef.current.style.transform = `translate3d(${x / 4}px, ${
          y / 4
        }px, 0)`;
      } else {
        // Restore initial position
        node.style.transform = `translate3d(0, 0, 0)`;
        textRef.current.style.transform = `translate3d(0, 0, 0)`;
      }

      const handleMouseEnter = () => {
        // Handle background color animation
        fillControls.start({
          y: ['80%', '-10%'],
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 }
        });
      };

      const handleMouseLeave = () => {
        fillControls.start({
          y: '-80%',
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 }
        });
      };

      if (node) {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          node.removeEventListener('mouseenter', handleMouseEnter);
          node.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }
  }, [mouseX, mouseY, ref, textRef, fillControls]);

  return (
    <Style ref={ref} href={props.href}>
      <span ref={textRef}>
        <Text data-text={props.children}>{props.children}</Text>
      </span>
      <Fill animate={fillControls} />
    </Style>
  );
});

export default Button;
