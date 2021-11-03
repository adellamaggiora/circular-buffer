# circular_buffer

### Easy to use and high performance circular buffer


#### Usage
`import { CircularBuffer } = from 'https://deno.land/x/circular_buffer@v1.0.2/mod.ts'`


`const cb = new CircularBuffer(length)` 


##### API

* `cb.insert()` <span style="color: forestgreen"> <*void*> </span> <span> Insert item into circular buffer. </span>
* `cb.peekNewest()` <span style="color: forestgreen"> <*any*> </span> <span> Returns the newest item inserted in the circular buffer.</span>
* `cb.peekOldest()` <span style="color: forestgreen"> <*any*> </span> <span> Returns the oldest item inserted in the circular buffer.</span>
* `cb.toArray()` <span style="color: forestgreen"> <*Array<*any*>*>  </span> Returns an array sorted from oldest (at index 0) to newest item.</span>
* `cb.clear()` <span style="color: forestgreen"> <*void*>  </span> Clear the circular buffer.</span>
* `cb.capacity()` <span style="color: forestgreen"> <*number*>  </span> Returns the capacity (max size available) in the circular buffer.</span>
* `cb.size()` <span style="color: forestgreen"> <*number*>  </span> Returns the current size (total elements) of the circular buffer.</span>
* `cb.isFull()` <span style="color: forestgreen"> <*boolean*>  </span> Returns true if circular buffer is full, otherwise false.</span>
