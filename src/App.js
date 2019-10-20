import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import ClassCOunter from './components/ClassCounter'
import HookCounter from './components/HookCounter'

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
    {/* <PostForm /> */}
    {/* <ClassCOunter /> */}
    <HookCounter />
    </div>
  );
}

export default App;
