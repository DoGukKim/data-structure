import { SingleLinkList } from "./single-linked-list";

export class Stack {
  constructor() {
    this.list = new SingleLinkList();
  }

  push(value) {
    this.list.push(value);

    return null;
  }

  size() {
    this.size();

    return null;
  }

  pop() {
    this.pop();

    return null;
  }
}

// stack을 배열로 구현하지 않으니 pop이 O(n)이 발생한다.
// 연결리스트를 사용할 것이라면, 이중 연결리스트로 구현하는게 시간 효율이 더 좋을 것 같다.
