import React, { useState, useEffect } from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseEditForm from "../components/ExpenseEditForm";
import {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from "../services/expenseApi";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const expensesData = await getAllExpenses();
        setExpenses(expensesData);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const handleEdit = (expense, i) => {
    setEditingExpense(expense);
    setId(i);
  };

  const handleCreateExpense = async (expenseData) => {
    try {
      const newExpense = await createExpense(expenseData);
      setExpenses([...expenses, newExpense]);
    } catch (error) {
      console.error("Error creating expense:", error);
    } finally {
    }
  };

  const handleEditFormSubmit = async (data) => {
    try {
      console.log("ExpenseId:", id);
      const updatedExpense = await updateExpense(id, data);
      const updatedExpenses = expenses.map((expense, i) =>
        i === id ? updatedExpense : expense
      );
      setExpenses(updatedExpenses);
      setEditingExpense(null);
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  const handleDelete = async (expenseId) => {
    try {
      await deleteExpense(expenseId);

      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense, i) => i !== expenseId)
      );
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className="w-full m-0 p-2 bg-zinc-200">
      <h1 className="text-2xl font bold text-blue-700 my-4">
        Expense Management
      </h1>
      <hr />
      <div className="flex flex-row w-full gap-10">
        <ExpenseList
          expenses={expenses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {editingExpense && (
          <ExpenseEditForm
            expense={editingExpense}
            onSubmit={handleEditFormSubmit}
          />
        )}
        {!editingExpense && <ExpenseEditForm onSubmit={handleCreateExpense} />}
      </div>
    </div>
  );
};

export default ExpensesPage;
