"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProject } from "../../../../src/store/projectSlice";

export default function NewProjectPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Planning",
    priority: "Medium",
    startDate: "",
    dueDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const { name, description, status, priority, startDate, dueDate } =
      formData;

    try {
      const response = await axios.post("/api/projects/add", {
        name,
        description,
        status,
        priority,
        startDate,
        dueDate,
      });


      if (response.status === 201) {
        setLoading(false);
        console.log("yes");
        dispatch(addProject(response.data.project));

        router.push("/projects");
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Create Project</h1>

          <p className="mt-2 text-base text-slate-400">
            Create a new project and start managing your work.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-white/10 bg-[#0d111d] p-6 shadow-xl sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Project Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter project name"
                className="
                  w-full rounded-lg
                  border border-slate-700
                  bg-[#111827]
                  px-4 py-3
                  text-sm text-white
                  placeholder:text-slate-600
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-1
                  focus:ring-indigo-500
                "
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-slate-200"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project..."
                rows={4}
                className="
                  w-full resize-none rounded-lg
                  border border-slate-700
                  bg-[#111827]
                  px-4 py-3
                  text-sm text-white
                  placeholder:text-slate-600
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-1
                  focus:ring-indigo-500
                "
              />
            </div>

            {/* Status + Priority */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg
                    border border-slate-700
                    bg-[#111827]
                    px-4 py-3
                    text-sm text-white
                    outline-none
                    focus:border-indigo-500
                    focus:ring-1
                    focus:ring-indigo-500
                  "
                >
                  <option value="Planning">Planning</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label
                  htmlFor="priority"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Priority
                </label>

                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg
                    border border-slate-700
                    bg-[#111827]
                    px-4 py-3
                    text-sm text-white
                    outline-none
                    focus:border-indigo-500
                    focus:ring-1
                    focus:ring-indigo-500
                  "
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Start Date */}
              <div>
                <label
                  htmlFor="startDate"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Start Date
                </label>

                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg
                    border border-slate-700
                    bg-[#111827]
                    px-4 py-3
                    text-sm text-white
                    outline-none
                    focus:border-indigo-500
                    focus:ring-1
                    focus:ring-indigo-500
                  "
                />
              </div>

              {/* Due Date */}
              <div>
                <label
                  htmlFor="dueDate"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Due Date
                </label>

                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg
                    border border-slate-700
                    bg-[#111827]
                    px-4 py-3
                    text-sm text-white
                    outline-none
                    focus:border-indigo-500
                    focus:ring-1
                    focus:ring-indigo-500
                  "
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="
                  rounded-lg
                  border border-white/10
                  px-5 py-3
                  text-sm font-semibold
                  text-slate-300
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="
    flex items-center justify-center gap-2
    rounded-lg
    cursor-pointer
    bg-indigo-600
    px-6 py-3
    text-sm font-semibold
    text-white
    shadow-lg shadow-indigo-600/20
    transition
    hover:bg-indigo-500
    disabled:cursor-not-allowed
    disabled:opacity-60
  "
              >
                {loading && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                )}

                {loading ? "Creating..." : "Create Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
