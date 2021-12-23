import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Label = styled.label`
  display: flex;
  align-items: center;
  > span {
    font-size: 14px;
    white-space: nowrap;
  }
  > input {
    font-size: 14px;
    margin-left: 16px;
    padding: 0 2px;
    width: 100%;
    height: 44px;
    border: none;
    background: none;
  }
`;

const Input: React.FC<Props> = (props) => {
  const { label, ...rest } = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  );
};

export { Input };
