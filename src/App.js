import React, { useState } from 'react';
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

  const deleteQuiz = (id) => {
    const newQuizList = Quiz.filter(element => 
      element.id !== id
      )
      setQuiz(newQuizList)
  } 

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/quiz-react" component={Home} />
      <Route exact path="/quiz-react/create" component={() => <Create submit={quizList} />} />
      <Route exact path="/quiz-react/list" component={() => <List list={Quiz} quiz={quizContent} delete={deleteQuiz} />} />
      <Route exact path="/quiz-react/list/quiz" component={() => <Content name={QuizContent.name} content={QuizContent.content} />} />
    </BrowserRouter>
  )
}

export default App;
