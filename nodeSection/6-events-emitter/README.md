Node.js - Event Emitter

Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it, an fs.readStream emits an event when the file is opened. All objects which emit events are the instances of events.EventEmitter.


Method & Description
1 	

addListener(event, listener)

Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.
2 	

on(event, listener)

Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.
3 	

once(event, listener)

Adds a one time listener to the event. This listener is invoked only the next time the event is fired, after which it is removed. Returns emitter, so calls can be chained.
4 	

removeListener(event, listener)

Removes a listener from the listener array for the specified event. Caution − It changes the array indices in the listener array behind the listener. removeListener will remove, at most, one instance of a listener from the listener array. If any single listener has been added multiple times to the listener array for the specified event, then removeListener must be called multiple times to remove each instance. Returns emitter, so calls can be chained.
5 	

removeAllListeners([event])

Removes all listeners, or those of the specified event. It's not a good idea to remove listeners that were added elsewhere in the code, especially when it's on an emitter that you didn't create (e.g. sockets or file streams). Returns emitter, so calls can be chained.
6 	

setMaxListeners(n)

By default, EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.
7 	

listeners(event)

Returns an array of listeners for the specified event.
8 	

emit(event, [arg1], [arg2], [...])

Execute each of the listeners in order with the supplied arguments. Returns true if the event had listeners, false otherwise.

Events
Sr.No. 	Events & Description
1 	

newListener

    event − String: the event name

    listener − Function: the event handler function

This event is emitted any time a listener is added. When this event is triggered, the listener may not yet have been added to the array of listeners for the event.


emitter.emit(eventName[, ...args])
Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

Returns true if the event had listeners, false otherwise.

<!-- REF => https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm -->