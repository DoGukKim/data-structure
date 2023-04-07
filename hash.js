const defaultHashTableSize = 30;

class HashTable {
  constructor() {
    this.buckets = Array.from({ length: defaultHashTableSize }, () => null);
  }

  hash(key) {
    // 각 문자의 UTF 코드로 합산하여 키 값을 생성한다.
    const hash = Array.from(key).reduce(
      (acc, cur) => acc + cur.charCodeAt(),
      0
    );
    // 해시 테이블의 사이즈로 제한하기 위해서 나머지 연산 활용.
    return hash % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    if (this.buckets[keyHash] !== null) {
      // 충돌이 발생하면 분리 연결법으로 해결한다.
      this.buckets[keyHash] = [...this.buckets[keyHash], [key, value]];
      return;
    }
    this.buckets[keyHash] = [[key, value]];
  }

  get(key) {
    // 분리연결법으로 배열에 저장되었을 때 값을 받아오기 위해 find로 처리.
    return (
      this.buckets[this.hash(key)].find((item) => item[0] === key)[1] ?? null
    );
  }

  delete(key) {
    const keyHash = this.hash(key);
    if (this.buckets[keyHash] !== null) {
      const isHas = this.buckets[keyHash].find((item) => item[0] === key);
      if (isHas) {
        this.buckets[keyHash] = this.buckets[keyHash].filter(
          (item) => item[0] !== key
        );
      }
    }
  }
}
