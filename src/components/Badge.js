import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.815em;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.badge.color};
  background: ${({ theme }) => theme.badge.background};
  border: 2px solid ${({ theme }) => theme.badge.borderColor};
  border-radius: 4px;
  user-select: none;
  cursor: default;
  transition: all 0.45s ease;

  a {
    font-weight: 700;
  }
`;

const Badge = ({ children, fixed, fixedRight }) => (
  <Style fixed={fixed} fixedRight={fixedRight}>
    {children}
  </Style>
);

export default Badge;
