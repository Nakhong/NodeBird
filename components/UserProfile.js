import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction(false));
  });

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>HN</Avatar>} title="Hwanak" />
      <Button style={{ marginLeft: 47 }} onClick={onLogOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
