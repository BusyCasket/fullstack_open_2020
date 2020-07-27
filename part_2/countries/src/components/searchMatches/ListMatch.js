import React, { useState, Fragment } from 'react';
import ExactMatch from './ExactMatch';

const ListMatch = ({ match }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Fragment key={match.name}>
      {!showDetails ? <p>{match.name}</p> : <ExactMatch match={match} />}
      <button onClick={() => setShowDetails(!showDetails)}>{!showDetails ? 'more' : 'hide'}</button>
    </Fragment>
  );
};

export default ListMatch;
