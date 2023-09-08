import React from "react";
import { useForm } from "react-hook-form";

const ExpenseEditForm = ({ expense = null, onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  React.useEffect(() => {
    if (expense) {
      setValue("date", expense.date || null);
      setValue("item", expense.item || null);
      setValue("category", expense.category || null);
      setValue("amount", expense.amount.toString() || null);
    }
  }, [expense, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="bg-white p-4 rounded-lg shadow-md my-2"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="date"
        >
          Date:
        </label>
        <input
          {...register("date")}
          type="date" // Use "date" input type for the date field
          id="date"
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="item"
        >
          Item:
        </label>
        <input
          {...register("item")}
          type="text"
          id="item"
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category:
        </label>
        <input
          {...register("category")}
          type="text"
          id="category"
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amount"
        >
          Amount:
        </label>
        <input
          {...register("amount")}
          type="number"
          id="amount"
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ExpenseEditForm;
