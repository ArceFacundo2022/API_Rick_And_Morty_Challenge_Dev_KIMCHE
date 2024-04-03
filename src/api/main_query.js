import { gql } from "@apollo/client"

export const Query = {}

Query.initialList = gql`
query{
    characters(page:1) {
        results {
            id
            name
            status
            gender
            species
            type
            origin{
                name
            }
            location{
                name
            }
            image
        }
    }
}
` 

Query.AllCharacters =  gql`

        query AllCharacters($page:Int!, $name: String, $status: String, $gender: String, $species: String){
            characters(page:$page,filter:{name:$name, status:$status, species:$species, gender:$gender}) {
                info{
                    pages
                    next
                }
                results {
                    id
                    name
                    status
                    gender
                    species
                    type
                    origin{
                        name
                    }
                    location{
                        name
                    }
                    image
                }
            }
        }
    `