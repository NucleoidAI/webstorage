export default class Storage {
  static formatKey(keys) {
    return keys
      .map((key) =>
        typeof key === "string" ? key.toLowerCase().replace(/\s+/g, "-") : key
      )
      .join(".");
  }

  static set(...args) {
    const value = args.pop();
    const formattedKey = this.formatKey(args);

    if (typeof value === "object") {
      window.localStorage.setItem(formattedKey, JSON.stringify(value));
      window.dispatchEvent(new Event("storage"));
    } else {
      window.localStorage.setItem(formattedKey, value);
      window.dispatchEvent(new Event("storage"));
    }
  }

  static get(...args) {
    const formattedKey = this.formatKey(args);

    try {
      return JSON.parse(window.localStorage.getItem(formattedKey));
    } catch {
      return window.localStorage.getItem(formattedKey);
    }
  }

  static remove(...args) {
    const formattedKey = this.formatKey(args);
    return window.localStorage.removeItem(formattedKey);
  }

  static clear() {
    return window.localStorage.clear();
  }
}
