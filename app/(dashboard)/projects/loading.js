export default function Loading() {
    return (
      <div className="space-y-8 animate-pulse">
  
        {/* Header */}
  
        <div className="flex items-center justify-between">
  
          <div>
            <div className="h-7 w-32 rounded bg-gray-200" />
  
            <div className="mt-2 h-4 w-64 rounded bg-gray-200" />
          </div>
  
          <div className="h-10 w-32 rounded-lg bg-gray-200" />
  
        </div>
  
  
        {/* Search */}
  
        <div className="flex gap-3">
  
          <div className="h-10 w-full max-w-md rounded-lg bg-gray-200" />
  
          <div className="h-10 w-32 rounded-lg bg-gray-200" />
  
        </div>
  
  
        {/* Cards */}
  
        <div className="grid gap-5 md:grid-cols-2">
  
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-64 rounded-xl bg-gray-200"
            />
          ))}
  
        </div>
  
      </div>
    );
  }