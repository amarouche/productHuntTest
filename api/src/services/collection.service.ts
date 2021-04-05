import * as dotenv from 'dotenv';
const fetch = require('node-fetch');

dotenv.config();
const url = process.env.API_URL
export class CollectionService {

  getCollections = async () =>{
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: process.env.API_TOKEN,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(this.getQuery())
      })
      return await res.json();
      } catch (error) {
      return error;
    }
  }

  getQuery = () => {
    return {
        query: `{
            collections {
              edges {
                node {
                  name
                  createdAt
                  coverImage
                  description
                  userId
                  url
                  followersCount
                  posts{
                    totalCount
                  }
                }
              }
            }
         }`
    }
  }
}