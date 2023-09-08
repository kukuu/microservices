from typing import List, Optional
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000", 
    "http://localhost:3011", 
]
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)
class Expense(BaseModel):
    date: str
    item: str
    category: str
    amount: float

expenses_db = []

@app.post("/expenses/", response_model=Expense)
async def create_expense(expense: Expense):
    expenses_db.append(expense)
    return expense

@app.get("/expenses/", response_model=List[Expense])
async def get_all_expenses():
    return expenses_db

@app.get("/expenses/{expense_id}", response_model=Expense)
async def get_expense(expense_id: int):
    if expense_id < 0 or expense_id >= len(expenses_db):
        raise HTTPException(status_code=404, detail="Expense not found")
    return expenses_db[expense_id]


@app.put("/expenses/{expense_id}", response_model=Expense)
async def update_expense(expense_id: int, updated_expense: Expense):
    if expense_id < 0 or expense_id >= len(expenses_db):
        raise HTTPException(status_code=404, detail="Expense not found")
    expenses_db[expense_id] = updated_expense
    return updated_expense


@app.delete("/expenses/{expense_id}", response_model=Expense)
async def delete_expense(expense_id: int):
    if expense_id < 0 or expense_id >= len(expenses_db):
        raise HTTPException(status_code=404, detail="Expense not found")
    deleted_expense = expenses_db.pop(expense_id)
    return deleted_expense
