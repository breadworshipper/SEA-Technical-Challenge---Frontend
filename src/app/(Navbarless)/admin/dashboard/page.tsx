import AdminDashboard from "@/components/AdminDashboard";
import AdminDashboardSidebar from "@/components/AdminDashboardSidebar";

export default function AdminDashboardPage() {
    return (
      <div className="flex">
        <AdminDashboardSidebar />
        <main className="ml-72 mt-6">
          <h1 className="text-3xl font-semibold text-deepgrey lg:w-11/12">
            Dashboard
          </h1>
            <AdminDashboard/>
        </main>
      </div>
    )
}