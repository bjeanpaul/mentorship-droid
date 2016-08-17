export const capture = async fn => {
  const res = [];
  await fn(v => res.push(v));
  return res;
};


export const fakeAuth = () => ({
  email: 'a@b.org',
  password: '1337',
});
