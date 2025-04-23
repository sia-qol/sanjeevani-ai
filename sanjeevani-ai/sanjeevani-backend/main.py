from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain.llms import HuggingFaceHub
import os

# === CONFIGURATION ===
os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"

# === FASTAPI APP ===
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === INPUT MODEL ===
class Message(BaseModel):
    text: str

# === LLM SETUP ===
llm = HuggingFaceHub(repo_id="google/flan-t5-large", model_kwargs={"temperature": 0.5, "max_length": 100})
memory = ConversationBufferMemory()
conversation = ConversationChain(llm=llm, memory=memory)

# === ROUTES ===
@app.post("/chat")
async def chat_with_sia(message: Message):
    user_input = message.text
    response = conversation.run(user_input)
    return {"reply": response}
