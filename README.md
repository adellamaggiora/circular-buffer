# circularbuffer

### Easy to use and high performance circular buffer



#### Installation

`npm i easy-circular-buffer`


#### Usage

`const { createCircularBuffer } = require('easy-circular-buffer')`

`const cb = createCircularBuffer(length)` 


##### Methods

* `cb.insert()` <span style="color: forestgreen"> <*void*> </span> <span> Insert item into circular buffer. </span>
* `cb.peekNewest()` <span style="color: forestgreen"> <*any*> </span> <span> Returns the newest item inserted in the circular buffer.</span>
* `cb.peekOldest()` <span style="color: forestgreen"> <*any*> </span> <span> Returns the oldest item inserted in the circular buffer.</span>
* `cb.toArray()` <span style="color: forestgreen"> <*Array<*any*>*>  </span> Returns an array sorted from oldest (at index 0) to newest item.</span>
