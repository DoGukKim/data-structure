const defaultHashTableSize = 30;
class HashTable {
  constructor() {
    this.buckets = Array(defaultHashTableSize).fill(null);
    this.keys = {};
  }
  hash(key) {
    const hash = Array.from(key).reduce(
      (acc, keySymbol) => acc + keySymbol.charCodeAt(0),
      0
    );
    return hash % this.buckets.length;
  }
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    if (this.buckets[keyHash] !== null) {
      this.buckets[keyHash] = [...this.buckets[keyHash], [key, value]];
    } else {
      this.buckets[keyHash] = [[key, value]];
    }
  }

  get(key) {
    const value = this.buckets[this.hash(key)].find((i) => i[0] === key)[1];
    return value ?? null;
  }

  delete(key) {
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    if (bucket !== null) {
      const isHas = bucket.find((i) => i[0] === key);
      if (isHas) {
        delete this.keys[key];
        this.buckets[keyHash] = this.buckets[keyHash].filter(
          (i) => i[0] !== key
        );
      }
    }
  }
}

const hashTable = new HashTable();
hashTable.set("fav", "toss");
hashTable.set("avf", "baemin");
hashTable.delete("avf");
console.log(hashTable);
