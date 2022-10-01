import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Render_Tasks } from './components/Render_Tasks/RenderTasks';
import { TodoContextProvider } from './context/todo_Context';

function App() {

  // Welcom to my First Project

  return (
    <>
      <TodoContextProvider>
        <Render_Tasks />
      </TodoContextProvider>
    </>
  );
}

export default App;
