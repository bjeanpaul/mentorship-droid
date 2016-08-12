export const capture = async fn => {
  const res = [];
  await fn(v => res.push(v));
  return res;
};
