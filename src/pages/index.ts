import userSchema from './schema/useSchema';
export default [
  {
    label: '系统管理',
    url: '/',
    children: [
      {
        label: '用户管理',
        url: '/user',
        schema: userSchema
      }
    ]
  }
];
