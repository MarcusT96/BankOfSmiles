from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import cv2
import numpy as np
import base64

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
model = tf.keras.models.load_model('best_ultimate_model.keras')

# Make sure this matches the order used during training
emotions = ['angry', 'fear', 'happy', 'neutral', 'sad', 'surprise']

# Load the pre-trained face detection model from OpenCV
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

def preprocess_face(face):
    face = cv2.cvtColor(face, cv2.COLOR_BGR2GRAY)
    face = cv2.resize(face, (32, 32))
    face = face.astype('float32') / 255.0
    face = np.expand_dims(face, axis=-1)
    return face

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        img_data = base64.b64decode(data.split(',')[1])
        nparr = np.frombuffer(img_data, np.uint8)
        frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        if len(faces) > 0:
            (x, y, w, h) = faces[0]  # Process only the first detected face
            face = frame[y:y+h, x:x+w]
            preprocessed_face = preprocess_face(face)
            prediction = model.predict(np.expand_dims(preprocessed_face, axis=0))[0]
            emotion_index = np.argmax(prediction)
            emotion = emotions[emotion_index]

            await websocket.send_json({"emotion": emotion, "confidence": float(prediction[emotion_index])})
        else:
            await websocket.send_json({"emotion": "No face detected", "confidence": 0.0})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)