class HashTable {
  constructor(size) {
    this.table = Array.from({ length: size }, () => null);
    this.size = size;
  }

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      const charCode = key[i].charCodeAt();
      sum += charCode;
    }

    return sum % this.size;
  }

  set(key, value) {
    const hashKey = this.hash(key);

    // 충돌이 발생할 경우 분리 연결법을 사용해 해결
    if (!this.table[hashKey]) {
      this.table[hashKey] = [[key, value]];
    } else {
      const item = this.table[hashKey].find((item) => item[0] === key);

      if (!item) {
        this.table[hashKey].push([key, value]);
      } else {
        item[1] = value;
      }
    }
  }

  get(key) {
    const hashKey = this.hash(key);

    if (!this.table[hashKey]) return null;
    else {
      const item = this.table[hashKey].find((item) => item[0] === key);

      return item[1];
    }
  }
}

const table = new HashTable(30);
table.set("evil", 10);
table.set("evil", 3);
const some = table.get("evil");
console.log(some);
