
import React, { useEffect } from 'react';
import './App.css'

const tg = window.Telegram.WebApp
function App(): JSX.Element {

  useEffect(() => {
    tg.ready()
  }, []);

  const onClose = () => {
    tg.close()
  }

  return (
    <div className='App'>
      <button onClick={onClose}>Закрыть</button>
      <p>1</p>
    </div>
  );
}

export default App;