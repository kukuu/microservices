export default function Home() {
  return (
    <main>
      <div className="m-4 p-4 w-96 text-xl font-bold rounded-xl bg-yellow-400 shadow-md hover:shadow-lg hover:shadow-yellow-200">
        <a href="/expenses">Go To Expense Management</a>
      </div>
      <div className="m-4 p-4 w-96 text-xl font-bold rounded-xl bg-yellow-400 shadow-md hover:shadow-lg hover:shadow-yellow-200">
        <a href="/movies">Go To Movies</a>
      </div>
    </main>
  );
}
