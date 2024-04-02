import { gql } from "@apollo/client"

export const Query = {}

Query.AllCharacters = () => {
    const query = gql`
        query{
            characters {
                results {
                    id
                    name
                    status
                    gender
                    species
                    type
                    origin{
                        name
                        type
                        dimension
                    }
                    location{
                        name
                        type
                        dimension
                    }
                    image
                }
            }
        }
    `

    return query
}