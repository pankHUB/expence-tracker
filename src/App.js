import ExpenseItem from "./components/ExpenseItem";

function App() {
  
  const expenses = [
    {
      id: 'e1',
      title: 'Mirror',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Mobile', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Grossary',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Book',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];  
  return (
    <div >
        <h2>Expence Tracker</h2>
        <ExpenseItem expenses = {expenses}/>
    </div>
  );
}

export default App;
