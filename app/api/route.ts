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

export async function GET(){
    let res : postType[] = [
        {
            id: 1,
            img: "https://images.stockcake.com/public/9/0/1/9012557b-8e44-4713-8b8c-fbca955a4e59_large/dramatic-natural-arch-stockcake.jpg",
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
        },
        {
            id: 2,
            img: "https://images.stockcake.com/public/0/6/0/060b6a2c-c111-4c51-a7d5-be0abc2fbef9_large/sunset-sailing-serenity-stockcake.jpg",
            title: "exsample post2",
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
        },
        {
            id: 3,
            img: "https://images.stockcake.com/public/7/8/a/78a786f7-42af-4509-981d-2956753d1412_large/natural-skincare-setup-stockcake.jpg",
            title: "exsample post3",
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
        },
        {
            id: 4,
            img: "https://images.stockcake.com/public/c/d/9/cd9aae91-0026-49f5-966f-63c6132a64ac_large/urban-rollerblading-adventure-stockcake.jpg",
            title: "exsample post4",
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
        },
        {
            id: 5,
            img: "https://images.stockcake.com/public/7/2/4/724ea483-d765-444b-a16b-861779da0070_large/snowy-night-train-stockcake.jpg",
            title: "exsample post5",
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
        },
        {
            id: 6,
            img: "https://images.stockcake.com/public/1/d/a/1dafbf64-ed4c-48dc-87e4-441e6b4a8d36_large/serene-lake-dock-stockcake.jpg",
            title: "exsample post6",
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