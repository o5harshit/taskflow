import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import { auth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
   const session = await auth();
   console.log(session);
  
    if (!session?.user) {
      redirect('/signin');
    }
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="flex">
        
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <Header />

          <main className="flex-1 p-6">
            {children}
          </main>
        </div>

      </div>
    </div>
  );
}