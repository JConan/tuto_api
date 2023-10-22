import { json } from "@sveltejs/kit";

export function GET({ params }) {
    console.log(params);

    return json("hello get")
}