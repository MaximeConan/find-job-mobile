import { gql } from "@apollo/client"

export const JOBS_QUERY = gql`
  query {
    jobs {
      title
      company {
        id
        name
      }
      description
      id
      cities {
        id
        name
      }
    }
  }
`
