// app/(auth)/layout.js

export default function AuthLayout({ children }) {
  return (
    <main>
      <div>
        <h1>TaskFlow</h1>

        {children}
      </div>
    </main>
  );
}