import { json } from "@sveltejs/kit";

// what is a resource ?

// equivalent à un select
export async function GET({ url }) {
    console.log(
        url.searchParams
    );
    return json('hello get')
}

// pour créer 
export async function POST({ request }) {
    const data: {
        message: string
    } = await request.json()


    console.log(data)
    return json(data.message)
}

// pour mise à jour total de la ressource 
export async function PUT({ request }) {
    const data: {
        message: string
    } = await request.json()


    console.log(data)
    return json('hello put')
}

// pour mise à jour partiel de la ressource 
export async function PATCH() {
    return json('hello patch')
}

// pour mise à jour 
export async function DELETE() {
    return json('hello delete')
}
