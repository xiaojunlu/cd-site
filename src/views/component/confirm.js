export const confirm_api = `
cd.confirm({
  title: '标题',
  content: '确定要这么做吗？',
  okText: '确定',
  cancelText: '取消',
  className: '',
}).on('ok', () => {
  console.log('点击确定按钮后的回调函数');
}).on('cancel', () => {
  console.log('点击取消按钮后的回调函数');
})
`;