import { auth } from "../api/auth/[...nextauth]/route"; 

export default  async  function DataPage(){
       const session = await auth();
    return <div>
        {JSON.stringify(session)}
    </div>
}