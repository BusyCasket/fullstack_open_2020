import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const Popular = ({ anecdote, votes }) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      {votes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <>
          <p>{anecdote}</p>
          <p>has {votes} votes</p>
        </>
      )}
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(props.anecdotes.length).fill(0));
  const [popular, setPopular] = useState(0);

  const voteAnecdote = () => {
    let voteCopy = [...vote];
    voteCopy[selected] += 1;
    setVote(voteCopy);

    let max = voteCopy[popular];
    let maxIndex = popular;
    for (let i = 0; i < voteCopy.length; i++) {
      if (max < voteCopy[i]) {
        max = voteCopy[i];
        maxIndex = i;
      }
    }
    setPopular(maxIndex);
  };

  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <Button text="vote" handleClick={voteAnecdote} />
      <Button text="next anecdote" handleClick={newAnecdote} />
      <Popular anecdote={props.anecdotes[popular]} votes={vote[popular]} />
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
