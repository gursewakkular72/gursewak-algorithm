// Hash Table Class

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // Set method stores a value in hash table via separate chaining method.
  set(key, value) {
    const index = this._hash(key);
    const pair = [key, value];
    console.log("runs");
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push(pair);
  }

  //Accepts a key
  // Hashes the key
  // Retrieves the key-value pair in the hash table
  // If the key isn't found, returns undefined

  get(key) {
    const index = this._hash(key);

    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
    }
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length === 1) {
          keys.push(this.keyMap[i][0][0]);
        } else {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keys.includes(this.keyMap[i][j][0]))
              keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }

  Values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (this.keyMap[i].length === 1) {
          values.push(this.keyMap[i][0][1]);
        } else {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!values.includes(this.keyMap[i][j][1]))
              values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return values;
  }
}
const hashTable = new HashTable(17);
hashTable.set("yellow", "#00fff");
hashTable.set("maroon", "#fdfkhsdf");
hashTable.set("yellow", "#00fff");
hashTable.set("blue", "#fdssdf");
