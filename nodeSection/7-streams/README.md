Types of streams
#

There are four fundamental stream types within Node.js:

    Writable: streams to which data can be written (for example, fs.createWriteStream()).
    
    Readable: streams from which data can be read (for example, fs.createReadStream()).
    
    Duplex: streams that are both Readable and Writable (for example, net.Socket).
    
    Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).

Additionally, this module includes the utility functions stream.pipeline(), stream.finished(), stream.Readable.from() and stream.addAbortSignal().

Streams Promises API
#
Added in: v15.0.0

The stream/promises API provides an alternative set of asynchronous utility functions for streams that return Promise objects rather than using callbacks. The API is accessible via require('node:stream/promises') or require('node:stream').promises.
Object mode
#

All streams created by Node.js APIs operate exclusively on strings and Buffer (or Uint8Array) objects. It is possible, however, for stream implementations to work with other types of JavaScript values (with the exception of null, which serves a special purpose within streams). Such streams are considered to operate in "object mode".

Stream instances are switched into object mode using the objectMode option when the stream is created. Attempting to switch an existing stream into object mode is not safe.
Buffering
#

Both Writable and Readable streams will store data in an internal buffer.

The amount of data potentially buffered depends on the highWaterMark option passed into the stream's constructor. For normal streams, the highWaterMark option specifies a total number of bytes. For streams operating in object mode, the highWaterMark specifies a total number of objects.

Data is buffered in Readable streams when the implementation calls stream.push(chunk). If the consumer of the Stream does not call stream.read(), the data will sit in the internal queue until it is consumed.

Once the total size of the internal read buffer reaches the threshold specified by highWaterMark, the stream will temporarily stop reading data from the underlying resource until the data currently buffered can be consumed (that is, the stream will stop calling the internal readable._read() method that is used to fill the read buffer).

Data is buffered in Writable streams when the writable.write(chunk) method is called repeatedly. While the total size of the internal write buffer is below the threshold set by highWaterMark, calls to writable.write() will return true. Once the size of the internal buffer reaches or exceeds the highWaterMark, false will be returned.

A key goal of the stream API, particularly the stream.pipe() method, is to limit the buffering of data to acceptable levels such that sources and destinations of differing speeds will not overwhelm the available memory.

The highWaterMark option is a threshold, not a limit: it dictates the amount of data that a stream buffers before it stops asking for more data. It does not enforce a strict memory limitation in general. Specific stream implementations may choose to enforce stricter limits but doing so is optional.

Because Duplex and Transform streams are both Readable and Writable, each maintains two separate internal buffers used for reading and writing, allowing each side to operate independently of the other while maintaining an appropriate and efficient flow of data. For example, net.Socket instances are Duplex streams whose Readable side allows consumption of data received from the socket and whose Writable side allows writing data to the socket. Because data may be written to the socket at a faster or slower rate than data is received, each side should operate (and buffer) independently of the other.

<!-- REF => https://nodejs.org/api/stream.html -->