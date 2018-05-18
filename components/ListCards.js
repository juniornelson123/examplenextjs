import React, { Component } from 'react'

import gql from "graphql-tag";
import { Query } from "react-apollo";


const GET_CARDS = gql`
  {
    cards {
      id
      title
      items{
        title
      }
    }
  }
`;

class ListCards extends Component {
  render(){
    return(
      <Query query={GET_CARDS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <ul name="item">
              {data.cards.map(card => (
                <li key={card.id}>
                  {card.title}
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    )
  }
}

export default ListCards
