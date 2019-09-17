import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';

const apps = [
  {
    url: 'blackjack',
    name: 'Blackjack',
    app: Blackjack,
  },
  {
    url: 'rock_paper_scissors',
    name: 'Rock Paper Scissors',
    app: RockPaperScissors,
  },
  {
    url: 'tic_tac_toe',
    name: 'Tic Tac Toe',
    app: TicTacToe,
  },
];

const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

// const navigate = (e, to) => {
//   e.preventDefault();
//   history.pushState(null, null, to);
// };

// function Link(props) { // at least  props.to, props.children
//   // we need an anchor tag in the jsx
//   // we need a click handler on said anchor tag
//   // we need to use the HTML5 history API (pushState)

//   const onClick = e => navigate(e, props.to);

//   return (
//     <a
//       href='#'
//       className={props.className ? props.className : null}
//       onClick={onClick}>
//       {props.children}
//     </a>
//   );
// }

// const StyledLink = styled(Link)`
//   color: green;
// `;

export default function Container(props) {
  return (
    <StyledContainer>
      <nav>
        {
          apps.map(app => <NavLink to={app.url}>{app.name}</NavLink>)
        }
      </nav>

      <Section
        color='#d6247a'
        heading='Contact'
        content='Contact me always renders.'
      />
    </StyledContainer>
  );
}
