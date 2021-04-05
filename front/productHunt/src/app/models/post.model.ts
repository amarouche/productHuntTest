
export class Post {
  node:{
    id: number,
    name:string,
    url: string,
    description: string,
    createdAt: Date,
    website: string,
    user:Object,
    votesCount:number,
    tagline:string
    thumbnail:{
      url:string
    },
  }
}