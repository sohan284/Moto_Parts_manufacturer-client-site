import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-secondary rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>How will you improve the performance of a React Application?</h4>
                <ul className='text-left text-xl'>
                    <li># Keeping component state local where necessary.</li>
                    <li># Memoizing React components to prevent unnecessary re-renders.</li>
                    <li># Code-splitting in React using dynamic import</li>
                    <li># Windowing or list virtualization in React.</li>
                    <li># Lazy loading images in React.</li>
                </ul>
            </div>
            <div className='bg-secondary rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>What are the different ways to manage a state in a React application?</h4>
                <ul className='text-left text-xl'>
                  <li>Local State: Local condition is the data that we manage on one or the other component. Local states are often manipulated in response using the useState hook.
For example, to show or hide a model element, or to track form values ​​such as form submission, the local state will be required when the form is inactive and the value of the form inputs.</li>
                  <li>Global State: The Global State is the data that we manage across multiple elements. Global status is essential when we want to receive and update data anywhere or at least in multiple components of our app.</li>
                  <li>Server State: Data that comes from an external server must be integrated with our UI status Server state is a common concept, but can be difficult to manage with all our local and global UI conditions as well. There are several parts of the state that must be handled when fetching or updating data from an external server, including loading and error status.</li>
                  <li>URL State: Existing data at our URL, including pathname and query parameters. The URL state is often missing as a division of the state, but it is important. In many cases, a large part of our application relies on accessing the URL state. Imagine creating a blog without being able to bring up a post based on its slag or ID located at URL!</li>
              </ul>
            </div>
            <div className='bg-secondary rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>How does prototypical inheritance work?</h4>
                <h1 className='text-left text-xl'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
              </h1>
            </div>
            <div className='bg-secondary rounded-md m-5 p-3'>
                <h4 className='font-bold text-xl text-left text-red-600'>Searching Elements of An Array</h4>
                <h1 className='text-left text-xl'>
                With ES6 JavaScript added the includes method natively to both the Array and String natives. The method returns true or false to indicate if the sub-string or element exists. While true or false may provide the answer you need, regular expressions can check if a sub-string exists with a more detailed answer. Until recently developers would need to create their own method using either indexOf or a regular expression. That changed in more recent versions of ECMAScript with the addition of the JavaScript includes method. `JavaScript includes() ECMAScript 6 added the includes method to both the String and Array objects natively. This method returns either true or false if the target string is contained within the source string or array.
              </h1>
            </div>
            <div className='bg-secondary rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>What is a unit test? Why should write unit tests?</h4>
                <h1 className='text-left text-xl'>
                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
              </h1>
            </div>
            
        </div>
    );
};
export default Blogs;