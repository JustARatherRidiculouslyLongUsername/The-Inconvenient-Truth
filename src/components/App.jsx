import React, {useState} from 'react';

import '../css/App.css';
import '../css/Modal.css';
import Options from './Options';
import Resources from './Resources';
import Question from './Question';
import Sidebar from './Sidebar';
import Tile from './Tile';
import Title from './Title';
import data from '../data';

import ReactModal from 'react-modal';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [selectedData, setSelectedData] = useState(1);
  const [progresses, setProgresses] = useState([50, 50, 50, 50]);

  const optionSelected = type => {
    setIsModalOpen(state => !state);
    setSelectedData(data[currentquestion][type]);
  }

  const goToBeginning = () => {
    setCurrentQuestion(1);
    setIsModalOpen(false);
    setProgresses([50, 50, 50, 50]);
  }

  const goToNextQuestion = () => {
    console.log(selectedData);
    setCurrentQuestion(selectedData.next);
    console.log(data);
    setIsModalOpen(false);

    const deltas = [
      selectedData.resources,
      selectedData.money,
      selectedData.pollution+1,
      selectedData.happiness
    ]
    setProgresses(prev => prev.map((val, idx) => val+deltas[idx]))
  }

  return (
    <main className="App">

      { currentquestion === 0 ? (
        <Title onDone = {() => goToBeginning() }/>
      ) : (

      <>
      <Resources progresses={progresses}/>

      <Question>
        {data[currentquestion].question}
      </Question>

      <Options onClick={optionSelected} definite={currentquestion === -10}/>


      <ReactModal isOpen={isModalOpen} style={{
        zIndex: 23,
        content: {
          backgroundColor: 'var(--background-accent)',
          borderRadius: '1rem',
          border: '0px red'
        },

        overlay: {
          backgroundColor: 'var(--background-tertiary)',
          color: 'var(--interactive-hover)'
        }
      }}>

        <blockquote>{selectedData.message ? selectedData.message : "Nothing Happened"}</blockquote>

        <Tile id="next" 
          activeBackground = 'rgb(41, 184, 6)'
          passiveBackground = 'rgb(77, 134, 2)'
          style={{
            width: '160px',
            height: '60px',
            margin: '0 auto',
            fontSize: '1.7rem'
          }}
          onClick = {() => selectedData.next === -1 ? goToBeginning() : goToNextQuestion()}
          >
          { selectedData.next === -1 ? "Play Again?" : "Next >" }
        </Tile>
      </ReactModal>
      </>
      )
      }
    </main>
  );
}

export default App;
