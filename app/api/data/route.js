import { auth } from "../auth/[...nextauth]/route";

export async function GET(){
    const session = await auth();
    return Response.json(session);
}