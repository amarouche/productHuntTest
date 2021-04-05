import * as dotenv from 'dotenv';
const fetch = require('node-fetch');

dotenv.config();
const url = process.env.API_URL
export class PostService{

  getPosts = async (req) =>{
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: process.env.API_TOKEN,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.getQuery(req))
      })
      return await res.json();
      } catch (error) {
        console.log(error)
      return error;
    }
  }

  getQuery = (req) => {
    const params = this.formatParams(req)
    return {
        query: `
        {
          posts  (${params})
          {
            edges{
              node{
                id
                name
                tagline
                description
                user {
                  name
                }
                createdAt
                votesCount
                url
                website
                thumbnail{
                  url
                }
                votesCount
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
        }
        `
    };
  }

  formatParams = (req) : string => {
    let params = req && req.start ? 'postedAfter:"'+req.start+'"': ''
    if(req && req.end){
      params +=  ' postedBefore: "'+req.end+'"'
    }
    if(req && req.order){
      params +=  ' order: '+req.order
    }
    return params
  }
}
// errors:
//    [ { error: 'rate_limit_reached',
//        error_description: 'Sorry. You have exceeded the API rate limit, please try again later.',