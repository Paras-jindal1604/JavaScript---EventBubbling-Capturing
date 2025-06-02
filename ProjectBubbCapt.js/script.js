
//^ Event Bubbling and Event Capturing

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


child.addEventListener('click',()=>{
    console.log("child clicked");
}, true)

parent.addEventListener('click',()=>{
    console.log("parent clicked");
}, true)

grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked");
}, true)






//? For bubbling --   " child -> parent -> grandparent  "     i.e. inside to outside till event element

//? For capturing --  "  grandparent -> parent -> child  "      i.e. outside to inside till event element


/*

if child,parent,grandparent ->  all are false then -> event bubbling
if child,parent,grandparent ->  all are true then -> event capturing


CASE 1 :  if child and grandparent are true and parent is false :
Output :  grandparent clicked -> child clicked -> parent clicked

Explanation :  grandparent and child are following capturing i.e. from outside to inside
                parent is following bubbling i.e. from inside to outside

->here, first capturing is followed from grandparent to child and parent is skipped as it is bubbling ;
        after reaching child bubbling is followed from child to parent because parent is bubbling.



CASE 2 :  if child and grandparent are false  and parent is true :
Output :  parent clicked -> child clicked -> grandparent clicked

Explanation : grandparent and child are following bubbling  i.e. from inside to outside
                parent is following capturing i.e.  from outside to inside

->  here, first capturing is followed from parent to child from outside to inside, grandparent is bubbling 
        so it is skipped and after reaching child since child and grandparent are bubbling
        so now bubbling is followed from  child to grandparent.



* *** **** --------------------- MOST IMPORTANT NOTE

* If there are bubbling and capturing simultaneously, then it follows such a path in which both,
*   bubbling and capturing can be done from reaching a common element.



?-------------------------------------------------------------

^ How does a parent or grandparent know about which child has triggered the event ?
? Ans. ->  since there may be many children of a parent we can pass 'event' keyword in 
?            callback function and can use 'event.target'. 
?            It returns the element(child) which has triggered the event.

*/
