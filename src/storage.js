export default class Storage {
  static set(...args) {
    const value = args.pop();

    if (typeof value === "object") {
      window.localStorage.setItem(args.join("."), JSON.stringify(value));
      window.dispatchEvent(new Event("storage"));
    } else {
      window.localStorage.setItem(args.join("."), value);
      window.dispatchEvent(new Event("storage"));
    }
  }

  static get(...args) {
    try {
      return JSON.parse(window.localStorage.getItem(args.join(".")));
    } catch {
      return window.localStorage.getItem(args.join("."));
    }
  }

  static remove(...args) {
    return window.localStorage.removeItem(args.join("."));
  }

  static clear() {
    return window.localStorage.clear();
  }
}
