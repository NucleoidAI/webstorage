export const createMockStorage = () => {
  const storage = {
    storage: new Map(),
    getItem(key) {
      return this.storage.get(key) || null;
    },
    setItem(key, value) {
      this.storage.set(key, value);
    },
    removeItem(key) {
      this.storage.delete(key);
    },
    clear() {
      this.storage.clear();
    },
    get length() {
      return this.storage.size;
    }
  };

  return storage;
};

export const setupTestEnvironment = () => {
  global.localStorage = createMockStorage();
  global.window = {
    localStorage: global.localStorage,
    dispatchEvent() {}
  };
};