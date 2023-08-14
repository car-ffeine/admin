import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  background: transparent;
  border: 1.4px solid #7f7f7f;
  border-radius: 8px;
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: #fafafa;
    border: 1.4px solid #333;
    transform: translateY(-2px);
  }
`;
