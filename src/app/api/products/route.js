import {NextResponse} from "next/server"
export async function POST(request){
    try{
        const {title,sku,barcode,productPrice,salePrice,categoryId,farmerId,imageUrl,description} = await request.json()
        const newProduct ={title,sku,barcode,productPrice,salePrice,categoryId,farmerId,imageUrl,description}
        console.log(newProduct)
        return NextResponse.json(newProduct)
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"Failed Create Product",
            error,
        },{status:500})
    }
}