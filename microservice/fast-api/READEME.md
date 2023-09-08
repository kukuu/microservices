## Creating virtual environment

### macOS
python3 -m venv .venv
source .venv/bin/activate

### Windows
py -3 -m venv .venv
.venv\scripts\activate

### Install FastAPI
pip install fastapi
### Instal ASGI server
pip install "uvicorn[standard]"


### Start server

```
uvicorn main:app --reload
```

### Swagger docs at 
- http://127.0.0.1:8000/docs
### Redoc at
- http://127.0.0.1:8000/redoc
'''
Make sure you are in fast-api folder