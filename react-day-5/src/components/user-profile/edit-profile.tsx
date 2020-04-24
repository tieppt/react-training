import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { Profile } from '../../models/profile';
import { fetchData } from '../../datasource/fetch-data';

export default function EditProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [saveState, setSaveState] = useState<{
    id: string;
    body: string;
  } | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData('http://localhost:3000/profile');
        setProfile(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!saveState) {
        return;
      }
      try {
        const data = await fetchData('http://localhost:3000/profile', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: saveState.body,
        });
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [saveState]);

//   function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
//     const name = (e.target! as HTMLInputElement).value;
//     console.log(name);
//     setProfile((profile) => {
//       return {
//         ...profile!,
//         name,
//       };
//     });
//   }

  function onFinish(args: any) {
    console.log(args);

    setSaveState({
      id: profile!.id,
      body: JSON.stringify(args),
    });
  }

  function onFinishFailed(...args: any) {
    console.log(args);
  }
  return (
    <>
      <div>Edit Profile</div>
      {profile ? (
        <div>
          <FormEdit
            initialValues={profile}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export {EditProfile};

interface FormEditProps {
  initialValues: Profile;
  onFinish: (formValue: any) => void;
  onFinishFailed: (error: any) => void;
}
function FormEdit(props: FormEditProps) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Form
      {...layout}
      name='basic'
      initialValues={props.initialValues}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}
    >
      <Form.Item
        label='Username'
        name='name'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label='Title' name='title'>
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
