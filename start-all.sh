#!/bin/bash

# 🚀 Launch SANJEEVANI AI: Backend + Frontend
echo "Starting SANJEEVANI AI..."

# ✅ Start FastAPI backend in new terminal tab
osascript -e 'tell application "Terminal" to do script "cd ~/Desktop/SANJEEVANI/SANJEEVANI_AI/SIA/SANJEEVANI_ReactUI/sanjeevani-ai/sanjeevani-backend && source venv/bin/activate && uvicorn main:app --reload"'

# ✅ Start React frontend in new terminal tab
sleep 2
osascript -e 'tell application "Terminal" to do script "cd ~/Desktop/SANJEEVANI/SANJEEVANI_AI/SIA/SANJEEVANI_ReactUI/sanjeevani-ai && npm run dev"'

echo "✅ All systems launching!"
