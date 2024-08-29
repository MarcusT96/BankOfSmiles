# Bank of Smiles

Deep learning project for AI course in NBI-Handelsakademin. 

This project uses a CNN model to classify images of faces into different emotions, creating a login system that verifies users based on their emotional expression. It demonstrates the use of deep learning in a fun, interactive web application.

### Dataset

The dataset used it the Kaggle dataset: https://www.kaggle.com/datasets/jonathanoheix/face-expression-recognition-dataset

## Project Setup

### Prerequisites

- Node.js and npm
- Python 3.10+

### Frontend Setup

1. Clone the repository:
   ```
   git clone https://github.com/MarcusT96/BankOfSmiles.git
   cd BankOfSmiles
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Create a Python virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Start the FastAPI server:
   ```
   uvicorn main:app --reload
   ```

## Running the Application

1. Ensure both the frontend and backend servers are running. A tip is to use a split terminal to run both servers.
2. Open a web browser and navigate to `http://localhost:5173` (or the port specified by your Vite server).
3. You should see the Bank of Smiles landing page. Click "Start Smiling Now!" to begin.
4. On the login page, allow camera access when prompted.
5. Smile to log in!

## Project Structure

- `/src`: Frontend React components and styles
- `/server`: Backend FastAPI server and the best chosen ML model
- `requirements.txt`: Python dependencies for the backend
- `package.json`: Node.js dependencies for the frontend
- `training and models`: Contains Jupyter Notebooks for training different models and the models themselves.
## Technologies Used

- Frontend: React, React Bootstrap, Vite
- Backend: FastAPI, TensorFlow, OpenCV
- Machine Learning: Convolutional Neural Network (CNN) for emotion detection

Added some basic styling with Bootstrap and fun elements. This project is just to demonstrate the use of deep learning and put a fun twist on what this model potentially could be used for.





