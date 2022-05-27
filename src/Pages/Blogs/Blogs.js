import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-blue-100 rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>How will you improve the performance of a React Application?</h4>
                <ul className='text-left'>
                    <li># Keeping component state local where necessary.</li>
                    <li># Memoizing React components to prevent unnecessary re-renders.</li>
                    <li># Code-splitting in React using dynamic import</li>
                    <li># Windowing or list virtualization in React.</li>
                    <li># Lazy loading images in React.</li>
                </ul>
            </div>
            <div className='bg-blue-100 rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>What are the different ways to manage a state in a React application?</h4>
                <ul className='text-left'>
                  <li>1.Local state.</li>
                  <li>2.Global state.</li>
                  <li>3.Server state.</li>
                  <li>4.URL state.</li>
              </ul>
            </div>
            <div className='bg-blue-100 rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>How does prototypical inheritance work?</h4>
                <h1 className='text-left'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
              </h1>
            </div>
            <div className='bg-blue-100 rounded-md m-5 p-3'>
                <h4 className='font-bold text-xl text-left text-red-600'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                <h1 className='text-left'>
                I use this setProduct method for the code complexity.This is also the object oriented method .It  allows us to track state in a function component.
              </h1>
            </div>
            <div className='bg-blue-100 rounded-md m-5 p-3'>
                <h4 className='font-bold text-3xl text-left text-red-600'>What is a unit test? Why should write unit tests?</h4>
                <h1 className='text-left'>
                Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
              </h1>
            </div>
            
        </div>
    );
};
export default Blogs;