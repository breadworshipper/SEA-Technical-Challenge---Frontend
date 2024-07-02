import AdminDashboardSidebar from "@/components/AdminDashboardSidebar"
import BranchTable from "@/components/BranchTable"
import { Button } from "@/components/ui/button"

export default function BranchPage() {
    return (
      <div className="flex">
        <AdminDashboardSidebar />
        <main className="ml-72 mt-6">
          <h1 className="text-3xl font-semibold text-deepgrey lg:w-11/12">
            Branch
          </h1>
        <Button className="text-white mt-4" disabled>
            + Add Branch
        </Button>

        <BranchTable />
        </main>
      </div>
    )
}