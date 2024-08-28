import { NextResponse } from "next/server"

interface articleType {
    type: string,
    content: string
}
interface commentType {
    commentId: number,
    user: string,
    text: string,
    date: string
}
interface postType {
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

export async function GET(){
    let res : postType[] = [
        {
            id: 1,
            img: "https://images.freeimages.com/images/large-previews/355/poppies-2-1334190.jpg?fmt=webp&w=500",
            title: "exsample post",
            date: "2024",
            readTime: 3,
            writer: "amir",
            category: "life",
            comments: [],
            article: [
                {
                  type: "text",
                  content: "welcome to my blog"
                }
            ]
        }
    ]
    return NextResponse.json(res);
}
// export async function POST(request : Request) {
//     const { post } = await request.json();
//     return NextResponse.json(post);
// }
// export async function PATCH(request) {
//     const { name } = await request.json();
//     return NextResponse.json(name);
// }
//   export async function PUT(request) {
//     const { name } = await request.json();
//     return NextResponse.json(name);
// }
//   export async function DELETE(request) {
//     const { name } = await request.json();
//     return NextResponse.json(name);
// }