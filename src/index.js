import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import "graphiql/graphiql.min.css";
import GraphiQL from "graphiql";

const URL = "https://appsync.mc1.expo.academy/graphql";

function graphQLFetcher(graphQLParams) {
  return fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json", Authorization: "1" },
    body: JSON.stringify(graphQLParams)
  }).then((response) => response.json());
}

const container = document.getElementById("root");

const defaultQuery = `
query MyQuery {
  listItemsModel {
    items {
      id
      item
    }
  }
}

`;

render(
  <GraphiQL fetcher={graphQLFetcher} defaultQuery={defaultQuery} />,
  container
);
