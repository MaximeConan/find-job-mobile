import { gql } from "@apollo/client"

export const JOBS_QUERY = gql`
  query {
    jobs {
      title
      slug
      company {
        id
        name
        slug
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

export const JOB_BY_SLUG_QUERY = gql`
  query Job($slug: String!, $company: String!) {
    job(input: { jobSlug: $slug, companySlug: $company }) {
      id
      title
      description
      tags {
        id
        name
        slug
      }
    }
  }
`
