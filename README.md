# WalkIn TechTest

## Approach

Given the tasks, it seemed natural to split development into two areas. One for the creation of the form, and checking whether Data enters the Firestore DB from the coded form correctly, and the other involved rendering submitted data points as part of a list. Coding the form seemed straightforward enough, as I felt I only required the one component as a form. When it came to coding a dynamic list, it was easier to divide the component into smaller ones: A WaitList, which renders all the entered Names and WaitTimes, an individual WaitListItem, to handle the rendering of each individual data point, and a ProgressionBar Component, which tries to show how much waittime has elapsed.

## Externals

I used the React Progress-UI package. It's available here:
- https://www.npmjs.com/package/react-progress-ui
- https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f

The second link has the author show us how a simple example progress bar is coded. I used an external library here because I thought coding a progress bar myself would take a lot of time away from development elsewhere, and also the examples felt intuitive and easy-to-incorporate, and after seeing them, coding my own progress bar felt like reinventing the wheel.

## Struggles

- I initially had coded my form to a level I was happy with, but re-encountered errors with fstore.settings, and timestamping. It feels like the way I have coded it is insecure, but I wasn't quite able to figure out the best practices around this.
- The FireStore DB structure confused me; it feels like one collection can hold many data entries, but with differing and customisable structures. This level of control and freedom with a DB was strange, as I was normally used to having a more strict and controlled experience with SQL. Firestore feels nimble, and a bit easier to understand as it has in-built consoles for us to see data. I think if I were to have coded more in React, its advantages would be clearer for me to see, but I was unable to make the most of its capability here.
- In coding components, I found myself stuck at a rather typical React hurdle - whether to store a data attribute as a prop, state, or class Constant. Especially when it came to coding the progress bar, where info has to be passed down between components. I'm not sure I configured the components to do this in the best way - it was difficult to structure, and debug, and I think the decision to store crucial info as a Class Constant started to undermine my code. 
