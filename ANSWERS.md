- [ x ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to validate the data types and structure of data that's coming into our React application. It's important that the inputs are the same type that we expect, because Javascript can do some weird type conversions if we perform certain functions with input types that are unexpected.

- [ x ] Describe a life-cycle event in React?

A life-cycle event is something like Component Did Mount, Component Did Unmount, etc. It tracks the life-cycle of different components quite literally, from the birth to death of each component.

- [ x ] Explain the details of a Higher Order Component?

Higher Order Components are a React pattern that's a little more difficult, a little more advanced. So far the main use I've seen is to encapsulate logic around which components to render. For example, render specific components if a user is logged in or not.

Another use of Higher Order Components is to make a "template" for a component. So if you have two components that are almost the same, except for one small detail, you can make a Higher Order Component to write the identical code once.

An example from the React docs is grabbing data from other places, maybe items in a list or one blog posts. Most of the code is the same, so you can make a HOC that grabs data and then make modifications to allow each use case. This is often cleaner than having two separate components.

- [ x ] What are three different ways to style components in React? Explain some of the benefits of each.

-You can use one CSS file for each individual JS file (or maybe folder), this is helpful if you like to have styling code separate from Javascript.

-In-line styling can be helpful if you only have one or two small things to add, it might be easier than going through the extra work of CSS files or Styled Components.

-You can use Styled Components. This is helpful to have the styling and JSX in the same file, they are close together and you can see everything at once. I also think this encourages the creation of smaller components, which is a good habit in React.