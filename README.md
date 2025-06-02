# 🔁 Event Bubbling & Capturing in JavaScript

This repository demonstrates how **JavaScript events propagate** through the DOM using two key phases:

- **Event Bubbling (default)**  
- **Event Capturing (optional)**

It also shows **how a parent element can detect an event triggered by one of its child elements**, using these event propagation techniques.

---

## 📚 What is Event Propagation?

When an event occurs in the DOM, it goes through **three phases**:

1. **Capturing Phase** – The event travels from the root (`document`) down to the target element.
2. **Target Phase** – The event reaches the actual target element.
3. **Bubbling Phase** – The event then bubbles up from the target back to the root.

By default, JavaScript uses the **bubbling phase** unless specified otherwise.

---

## 🔥 Event Bubbling (Default)

In event bubbling, the event starts at the **target** element and then propagates **upward** to its ancestors (parent, grandparent, etc.).


## ⏬ Event Capturing
In capturing, the event flows from the top (document) to the target. You can enable this phase by setting the third argument in addEventListener to true.


## 🧠 How Parent Knows Child Was Clicked?
Because of event propagation:

1. Events bubble up from the child to the parent.
2. The parent listens for events on its descendants.
3. The event object (event.target) tells which element was originally clicked.

---

👨‍💻 Author
Documented by [Paras Jindal](https://github.com/Paras-jindal1604) as part of a structured roadmap to mastering JavaScript and web development fundamentals.
