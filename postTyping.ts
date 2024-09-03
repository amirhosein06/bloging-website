interface articleType {
        type: string,
        content: string
}
interface commentType {
    commnetid: number,
    text: string,
    user: string,
    date: string
}
export interface postType {
    id: number,
    img: string,
    title: string,
    date: string,
    readTime: number,
    writer: string,
    category: string,
    comments: commentType[] | [],
    article: articleType[]
}