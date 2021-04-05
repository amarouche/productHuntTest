
export class Collection {
  node:{
    id: number,
    name:string,
    url: string,
    description:string,
    createdAt: Date,
    coverImage: string,
    followersCount:number
    votesCount:number,
    posts:{
      totalCount:number
    }
  }
}