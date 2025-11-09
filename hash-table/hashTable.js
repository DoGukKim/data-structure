class HashTable {
  constructor(size) {
    this.size = size;
    this.table = Array.from({ length: size }, () => null);
  }

  hash(key) {
    let hashKey = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      // this.size로 나눈 나머지 값을 저장하기 때문에, hash는 항상 0과 this.size - 1 사이의 값을 유지
      hashKey = (hashKey * prime + key[i].charCodeAt()) % this.size;
    }

    return hashKey;
  }

  set(key, value) {
    const hashKey = this.hash(key);

    if (!this.table[hashKey]) {
      this.table[hashKey] = [[key, value]];
    } else {
      this.table[hashKey].push([key, value]);
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

  delete(key) {
    const hashKey = this.hash(key);

    if (!this.table[hashKey]) return null;
    else {
      this.table[hashKey] = null;
    }
  }
}
