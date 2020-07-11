import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import List from './components/List';
import Content from './components/Content';


function App() {
  const [Quiz, setQuiz] =  useState([])
  const [QuizContent, setQuizContent] = useState()

  const quizList = (createQuiz) => {
    createQuiz.id = Math.random()
    const newQuiz = [...Quiz, createQuiz]
    setQuiz(newQuiz)
  }

  const quizContent = (id) => {
    setQuizContent()
    const content = [...Quiz].filter(element =>
      element.id === id
      )
      console.log(content)
    setQuizContent(content[0])
  }
  console.log(QuizContent)
  console.log(Quiz)

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={() => <Create submit={quizList} />} />
      <Route exact path="/list" component={() => <List list={Quiz} quiz={quizContent} />} />
      <Route exact path="/list/quiz" component={() => <Content name={QuizContent.name} content={QuizContent.content} />} />
    </BrowserRouter>
  )
  
}

export default App;
