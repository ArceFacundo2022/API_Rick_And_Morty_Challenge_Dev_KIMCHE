import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

import {HttpLink, ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const client = new ApolloClient(
  {
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://rickandmortyapi.com/graphql"
    })
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
