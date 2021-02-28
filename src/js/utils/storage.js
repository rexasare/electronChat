class Storage {
  setItem(key, value) {
    if (!value) {
      return null;
    }
    const sVaule = JSON.stringify(value);
    localStorage.setItem(key, sVaule);
    return this;
  }

  getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }
}

export default new Storage();
