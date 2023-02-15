import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

const NicknameEditForm = ({header,data}) => {
  return (
    <FormWrapper>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormWrapper>
  );
};

export default NicknameEditForm;

const FormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;
