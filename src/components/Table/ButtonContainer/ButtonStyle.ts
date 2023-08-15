import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1px 6px 1px 2px;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }

  background: transparent;
  border: 1.4px solid #7f7f7f;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    border: 1.4px solid #333;
    transform: translateY(-2px);
  }
`;
