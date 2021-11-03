export class CircularBuffer<T> {

  private _newest = -1
  private _oldest = 0
  private _buffer = []
  private _capacity

  constructor(length: number) {
    this._capacity = length
  }

  //#region  public API
  insert(item: T) {
    this._newest = (this._newest + 1) % this._capacity
    if (this._buffer.length >= this._capacity) {
      this._oldest = (this._oldest + 1) % this._capacity
    }
    this._buffer[this._newest] = item
  }

  peekNewest(): T {
    return this._buffer[this._newest]
  }

  peekOldest(): T {
    return this._buffer[this._oldest]
  }

  toArray(): T [] {
    if (this._newest > this._oldest) {
      return this._buffer.slice(0, this._newest + 1)
    }
    else {
      const firstPart = this._buffer.slice(this._oldest, this._capacity)
      const secondPart = this._buffer.slice(0, this._newest + 1)
      return [...firstPart, ...secondPart]
    }
  }

  clear(): void {
    this._buffer = []
    this._newest = -1
    this._oldest = 0
  }

  capacity(): number {
    return this._capacity
  }

  size(): number {
    return this.toArray().length
  }

  isFull(): boolean {
    return this.capacity() === this.size()
  }


}
