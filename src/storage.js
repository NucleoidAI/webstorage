export default class Storage {
  static set(project, key, value) {
    if (typeof value === "object") {
      localStorage.setItem(`${project}.${key}`, JSON.stringify(value));
    } else {
      localStorage.setItem(`${project}.${key}`, value);
    }
  }

  static get(project, key) {
    try {
      return JSON.parse(localStorage.getItem(`${project}.${key}`));
    } catch {
      return localStorage.getItem(`${project}.${key}`);
    }
  }

  static remove(project, key) {
    return localStorage.removeItem(`${project}.${key}`);
  }

  static setGlobal(key, value) {
    if (typeof value === "object") {
      localStorage.setItem(`${key}`, JSON.stringify(value));
    } else {
      localStorage.setItem(`${key}`, value);
    }
  }

  static getGlobal(key) {
    try {
      return JSON.parse(localStorage.getItem(`${key}`));
    } catch {
      return localStorage.getItem(`${key}`);
    }
  }

  static removeGlobal(key) {
    return localStorage.removeItem(`${key}`);
  }

  static clear() {
    return localStorage.clear();
  }
}
