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
            img: "https://images.freeimages.com/images/large-previews/7fe/nature-1185501.jpg?fmt=webp&w=500",
            title: "exsample post",
            date: "2024",
            readTime: 3,
            writer: "amir",
            category: "life",
            comments: [],
            article: [
                {
                  type: "text",
                  content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean"
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