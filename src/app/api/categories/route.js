import {NextResponse} from "next/server"
export async function POST(request){
    try{
        const {title,slug,imageUrl,description} = await request.json()
        const newCategory ={title,slug,imageUrl,description}
        console.log(newCategory)
        return NextResponse.json({
             
        })
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"Failed Create Category",
            error,
        },{status:500})
    }
}