function createCircularBuffer(length) {
    let newest = -1
    let oldest = 0
    let buffer = []

    return {
        insert: item => {
            newest = (newest + 1) % length
            if (buffer.length >= length) {
                oldest = (oldest + 1) % length   
            }
            buffer[newest] = item
        },
        peekNewest: () => {
            return buffer[newest]
        },
        peekOldest: () => {
            return buffer[oldest]
        },
        toArray: () => { 
            if (newest > oldest) {
                return buffer.slice(0, newest + 1)
            }
            else {
                const firstPart = buffer.slice(oldest, length)
                const secondPart = buffer.slice(0, newest + 1)
                return [...firstPart, ...secondPart]
            }
        }
    }

}


module.exports = { createCircularBuffer }




