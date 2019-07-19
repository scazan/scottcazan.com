import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://scottcazan.prismic.io/graphql",
  }),
  cache: new InMemoryCache()
});

const state = {
  events: [],
};
const events = client.query({
  query: gql`
    query{
      allEvents(lang:"en-us"){
        edges {
          node {
            venue
            title
          }
        }
      }
    }
  `,
})
  .then((data) => {
    state.events = data.data.allEvents.edges;
  });


export default state;
