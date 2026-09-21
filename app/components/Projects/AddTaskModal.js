"use client";

import { useState } from "react";
import axios from "axios";

export default function AddTaskModal({
  projectId,
  onClose,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Todo",
    priority: "Medium",
    dueDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/tasks/add", {
        projectId,
        ...formData,
      });

      if (response.status === 201) {
        console.log("Task created:", response.data.task);

        onClose();
      }
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

      {/* Modal */}
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0d111d] p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">

          <div>
            <h2 className="text-xl font-bold text-white">
              Add Task
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Create a new task for this project.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xl text-slate-500 transition hover:text-white"
          >
            ×
          </button>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Task Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
              className="w-full rounded-lg border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the task..."
              rows={4}
              className="w-full resize-none rounded-lg border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
            />
          </div>

          {/* Status + Priority */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-indigo-500"
              >
                <option value="Todo">
                  Todo
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Completed">
                  Completed
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-indigo-500"
              >
                <option value="Low">
                  Low
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="High">
                  High
                </option>
              </select>
            </div>

          </div>

          {/* Due Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-200">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-white/10 pt-5">

            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Task"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}