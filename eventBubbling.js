
/*

^ Event Bubbling -> It is a concept in DOM which happens when an element recieves an event, and that 
^                    event bubbles up to its parent and ancestor elements in DOM tree
^                     until it gets the root element.


? e.g. There are elements like child, parent and its grandparent that recieves an event.


?   ┌──────────────────────────────┐
?   │ Grand-parent                 │
?   │  ┌────────────────────────┐  │
?   │  │ Parent                 │  │
?   │  │  ┌──────────────────┐  │  │
?   │  │  │                  │  │  │
?   │  │  │      Child       │  │  │
?   │  │  │                  │  │  │
?   │  │  └──────────────────┘  │  │
?   │  └────────────────────────┘  │
?   └──────────────────────────────┘

    
child.addEventListener('click',()=>{
    console.log("child clicked")
})

parent.addEventListener('click',()=>{
    console.log("parent clicked")
})

grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked")
})
    

?      if child is clicked then "child event is triggered" and "child clicked" is printed on screen.
?       but child is present inside parent element, and area inside parent element is clicked,
?       so "parent event is triggered" and "parent clicked" is also printed on screen.
?       
?       now, child also comes inside area of grandparent element, so its event is also triggered,
?       and  "grandparent clicked" is also printed on screen.
?
?       Order of printing --   "  child -> parent -> grandparent  "

?   First, child then parent and then grandparent will be printed because event bubbles from inside to outside.
?   it is similar to "ripple" waves in water which spread outwards.

? If parent is clicked then parent and grandparent will be printed because event bubbles outside,
?   and the child is inside parent, so it will not be triggered.


^ This  "event bubbling" continues till the root element.



* Event Capturing - it is the total opposite of event bubbling, it goes from outside to inside.

? for above example, if child is clicked, then for  " event capturing "
?   first grandparent then parent and then child will be printed.

? Event capturing Order --   "  grandparent -> parent -> child  "



* addEventListener(event-type, callback, capture)

? addEventListener takes three parameters and the third one is for event capturing.
? by default its value is false or when no value is passed then it is false,
? for event capturing we have to pass "true" as the third parameter.

* By default "event bubbling"  and for "event capturing" pass "true" as third parameter in event listener.





*/
