# React.cloneElement(element,[props])

effectively clones and returns a new copy of a provided element. The first argument is the react element you would like to clone, and the second argument is the prompts that will be added and merged with the original props passed into the component

Remember that prompts in react are immutable objects. You must create a copy of the element first and perform the transformation in the copy.

That's exactly what React.cloneElement allows you to achieve.


# React.Children.map(children,callback)

Which provides utilities for dealing with the props.children data structure. The most important method is the map function.

React.children.map is very similar to the map function from arrays and invokes a function in every child contained within its children prop, performing a transformation and returning a new element.