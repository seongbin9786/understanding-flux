let id = 0;

export const createAutoIncrementId = () => {
  return (id++).toString();
};
