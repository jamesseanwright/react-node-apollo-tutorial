import uuid from 'uuid/v4';

const createDataStore = (operations = {}) => {
  const records = new Map();

  const connectedOperations = Object.fromEntries(
    Object.entries(operations).map(([name, opBinder]) => [
      name,
      opBinder(records),
    ]),
  );

  return {
    getAll: () => records.values(),
    findById: id => records.get(id),
    add: data => records.set(uuid(), data),
    ...connectedOperations,
  };
};

export const users = createDataStore({
  findByUsername: records => id => records.get(id),
});

export const messages = createDataStore();
