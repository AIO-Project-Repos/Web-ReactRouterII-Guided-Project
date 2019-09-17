import React from 'react';
import { Link, Route } from 'react-router-dom';
import Section from '../components/Section';


export default function Blackjack(props) {
  return (
    <div>
      <Section
        path='/'
        color='#4286f4'
        heading='Blackjack'
        content='This is my Blackjack game.'
      />
      {/* We want links to take us to locations like
      /blackjack/player
      /blackjack/dealer */}

      <Link to={props.match.url + '/player'}>Player</Link>
      <Link to={props.match.url + '/dealer'}>Dealer</Link>

      <Route
        path={props.match.path + '/player'}
        render={props => <h1>Player at {props.location.pathname}</h1>}
      />
      <Route
        path={props.match.path + '/dealer'}
        render={props => <h1>Dealer at {props.location.pathname}</h1>}
      />
    </div>
  );
}
