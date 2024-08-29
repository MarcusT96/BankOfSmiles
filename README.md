# Bank of Smiles

Deep learning project for AI course in NBI-Handelsakademin. 

This project uses a CNN model to classify images of faces into different emotions, creating a login system that verifies users based on their emotional expression. It demonstrates the use of deep learning in a fun, interactive web application.

## Project Setup

### Prerequisites

- Node.js and npm
- Python 3.7+

### Frontend Setup

1. Clone the repository:
   ```
   git clone https://github.com/YourUsername/BankOfSmiles.git
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

1. Ensure both the frontend and backend servers are running.
2. Open a web browser and navigate to `http://localhost:5173` (or the port specified by your Vite server).
3. You should see the Bank of Smiles landing page. Click "Start Smiling Now!" to begin.
4. On the login page, allow camera access when prompted.
5. Smile to log in!

## Project Structure

- `/src`: Frontend React components and styles
- `/server`: Backend FastAPI server and ML model
- `requirements.txt`: Python dependencies for the backend
- `package.json`: Node.js dependencies for the frontend

## Technologies Used

- Frontend: React, React Bootstrap, Vite
- Backend: FastAPI, TensorFlow, OpenCV
- Machine Learning: Convolutional Neural Network (CNN) for emotion detection

## Notes

- This project is a demonstration and should not be used for actual security purposes.
- Ensure your webcam is functioning and properly lit for the best experience.

## Contributing

This project was created as part of a course assignment. While it's not open for contributions, feel free to fork and experiment with your own ideas!

## License

[Specify your license here, e.g., MIT License]
