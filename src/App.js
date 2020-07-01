import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import List from './components/List';


function App() {
  const [Quiz, setQuiz] =  useState([])

  const quizList = (CreateQuiz) => {
    CreateQuiz.id = Math.random()
    const newQuiz = [...Quiz, CreateQuiz]
    setQuiz(newQuiz)
  }



  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/create" component={() => <Create submit={quizList} />} />
      <Route exact path="/list" component={() => <List list={Quiz} />} />
    </BrowserRouter>
  )
  
}

export default App;
