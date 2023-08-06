export interface NewsData{
    status : string,
    totalResult : number,
    articles : New[]
}

export interface New{
    author : string,
    content : string | null,
    description : string | null,
    publishedAt : string,
    title : string,
    url : string
    urlToImage : string | null
}