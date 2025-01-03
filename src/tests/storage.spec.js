import Storage from "../storage.js";
import assert from "assert";
import { setupTestEnvironment } from "./mock/storage-mock.js";

describe("Storage", () => {
  before(() => {
    setupTestEnvironment();
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it("should store and retrieve string", () => {
    Storage.set("emperor", "Augustus");
    const emperor = Storage.get("emperor");

    assert.strictEqual(emperor, "Augustus");
  });

  it("should store and retrieve object", () => {
    const data = { name: "Julius Caesar" };
    Storage.set("emperor", data);
    const emperor = Storage.get("emperor");

    assert.deepStrictEqual(emperor, data);
  });

  it("should format single key with spaces", () => {
    Storage.set("Emperor Name", "Marcus Aurelius");

    assert.strictEqual(localStorage.getItem("emperor-name"), "Marcus Aurelius");
    assert.strictEqual(Storage.get("Emperor Name"), "Marcus Aurelius");
  });

  it("should format nested keys", () => {
    Storage.set("Emperor Profile", "Dynasty", "Nerva-Antonine");
    
    assert.strictEqual(
      localStorage.getItem("emperor-profile.dynasty"),
      "Nerva-Antonine"
    );
  });

  it("should remove item", () => {
    Storage.set("emperor", "Trajan");
    Storage.remove("emperor");
    
    assert.strictEqual(localStorage.getItem("emperor"), null);
  });

  it("should clear all items", () => {
    Storage.set("emperor1", "Hadrian");
    Storage.set("emperor2", "Constantine");

    Storage.clear();
    
    assert.strictEqual(localStorage.length, 0);
  });
});

