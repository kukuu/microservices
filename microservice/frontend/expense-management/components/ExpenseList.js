// components/ExpenseList.js
import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {expenses.map((expense, i) => (
        <div
          key={expense.id}
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 h-56"
        >
          <p className="text-xl font-semibold">{expense.date}</p>
          <p className="text-gray-600 mx-2">Item: {expense.item}</p>
          <p className="text-gray-600 mx-2">Category: {expense.category}</p>
          <p className="text-gray-600 mx-2">Amount: ${expense.amount}</p>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={() => onEdit(expense, i)}
              className="text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              <BsPencilSquare size={20} />
            </button>
            <button
              onClick={() => onDelete(i)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              <BsTrash size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
