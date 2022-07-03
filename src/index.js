import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import "graphiql/graphiql.min.css";
import GraphiQL from "graphiql";

const URL = "https://swapi-graphql.netlify.com/.netlify/functions/index";

function graphQLFetcher(graphQLParams) {
  return fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

const container = document.getElementById("root");

const defaultQuery = `
{
  allFilms {
    edges {
      node {
        id
        title
        producers
        episodeID
        created
      }
    }
  }
}
`;

render(
  <GraphiQL fetcher={graphQLFetcher} defaultQuery={defaultQuery} />,
  container
);
