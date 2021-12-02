import React from "react";
import Form from "./Form";

const Create = ({ createShop }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    createShop(expenseData);
  };
  return (
    <div className="addshop-container">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default Create;
