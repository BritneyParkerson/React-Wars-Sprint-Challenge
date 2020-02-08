# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    o  According to reactjs.org “A JavaScript library for building user interfaces”
    o  A UI Component library that is built in JS for building UI’s with Components. 
    o  React JS was built by the Facebook team to help them with solving some major problems they faced while dealing with complex state.
    o  They needed to know how to manage so much data without bogging down the DOM or web Browser.
    o  React is NOT a framework! It is just a library that renders UI
    o  React JS is scalable, reusable, and unopinionated when it come to how a developer manages code. 
    o  Learned from the video in the TK: https://youtu.be/moTpUR8I6-I
    o  React JS uses a virtual DOM, which is a virtual representation of what the DOM will be. It works similarly to a screen shot and can’t be edited in the way that a usual DOM can be. (Emily said this in one of her lectures.)



2. What does it mean to think in react?
    o  When you think in react, you start with a mock and then follow 5 steps:
          Step 1: Break the UI into A Component Hierarchy
            •  This is where you create your containers and break your components and subcomponents into separate “boxes” so that each component matches a piece of your model data.
          Step 2: Build a Static Version in React
            •	Where you build a version of the app without using state so that it is not interactive yet.
          Step 3: Identify the Minimal (but complete) Representation of UI State
            •  Where you determine the minimal amount of state needed for your app and, using the DRY method, figure out what state or states you want/need to use to accomplish your goals.
          Step 4: Identify Where Your State Should Live
            •  Determine the components that own the minimal set of app state that was chosen and follow the hierarchy to figure out where the state should be located to create the proper data flow down the hierarchy.
          Step 5: Add Inverse Data Flow
            •  Add support for the data to flow the opposite direction, or “up” the hierarchy, so that the data can be updated in the correct state.



3. Describe state.
    o  Where we pull data from for our reactjs projects is called state. States should be kept as simple as possible and if multiple components are needed from the same state then they should all be confined in the same container.


4. Describe props.
    o  Props, short for properties, are single values or objects that are contain other values and are passed to React Components. They are used with a naming formula that is similar to HTML but is actually more like JavaScript.


5. What are side effects, and how do you sync effects in a React component to state or prop changes?
    o  The definition of a side effect is “anything that affects something outside the scope of the function being executed”.
    o  Use the useState or useEffect hook to sync effects to state or prop changes

