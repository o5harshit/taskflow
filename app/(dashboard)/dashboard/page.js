import ProjectList from "../../components/dashboard/ProjectList";
import RecentTasks from "../../components/dashboard/RecentTasks";
import StatCard from "../../components/dashboard/StatCard";


export default async function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Page heading */}

      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard 
        </h1>

        <p className="mt-1 text-sm text-white/50">
          Welcome back! Here&lsquo;s what&apos;s happening.
        </p>
      </div>


      {/* Statistics */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <StatCard
          title="Projects"
          value="12"
          description="3 created this month"
        />

        <StatCard
          title="Tasks"
          value="48"
          description="8 due this week"
        />

        <StatCard
          title="Completed"
          value="31"
          description="64.5% completion rate"
        />

      </div>


      {/* Projects */}

      <ProjectList />


      {/* Tasks */}

      <RecentTasks />

    </div>
  );
}