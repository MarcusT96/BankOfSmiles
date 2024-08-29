import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLoginSuccess }) => {
  const [isCapturing, setIsCapturing] = useState(false)
  const [emotion, setEmotion] = useState('')
  const [confidence, setConfidence] = useState(0)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const ws = useRef(null)

  const emotionMessages = {
    angry: "You look a bit angry. Take a deep breath and smile to log in!",
    fear: "Don't be afraid, just relax and give us a smile to log in!",
    happy: "That's a great smile! Logging you in...",
    neutral: "Let's see that beautiful smile of yours to log in!",
    sad: "You look a bit sad. Let's turn that frown upside down and smile to log in!",
    surprise: "Wow, you look surprised! How about turning that into a smile to log in?"
  }

  const startCapture = async () => {
    try {
      setIsCapturing(true)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      // Start WebSocket connection
      ws.current = new WebSocket('ws://localhost:8000/ws')
      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data)
        setEmotion(data.emotion)
        setConfidence(data.confidence)
        if (data.emotion === 'happy' && data.confidence > 0.7) {
          onLoginSuccess()
        }
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Failed to access the camera. Please check your permissions and try again.')
      setIsCapturing(false)
    }
  }

  const stopCapture = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach(track => track.stop())
    }
    if (ws.current) {
      ws.current.close()
    }
    setIsCapturing(false)
    setEmotion('')
    setConfidence(0)
  }

  useEffect(() => {
    const captureAndSend = () => {
      if (videoRef.current && canvasRef.current && ws.current && ws.current.readyState === WebSocket.OPEN) {
        const context = canvasRef.current.getContext('2d')
        context.drawImage(videoRef.current, 0, 0, 640, 480)
        const imageData = canvasRef.current.toDataURL('image/jpeg')
        ws.current.send(imageData)
      }
    }

    let interval
    if (isCapturing) {
      interval = setInterval(captureAndSend, 200) // Send frame every 200ms
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
      if (ws.current) {
        ws.current.close()
      }
    }
  }, [isCapturing])

  const handleLoginAttempt = (data) => {
    setEmotion(data.emotion)
    setConfidence(data.confidence)
    if (data.emotion === 'happy' && data.confidence > 0.7) {
      onLoginSuccess()
    }
  }

  const getEmotionMessage = () => {
    if (emotion === 'No face detected') {
      return "We can't see your face. Please make sure you're in view of the camera."
    }
    return emotionMessages[emotion] || `Please smile to log in! Detected emotion: ${emotion}`
  }

  return (
    <Container className="text-center">
      <Row className="my-5">
        <Col>
          <h2 className="text-primary">Smile to Login</h2>
          {isCapturing ? (
            <>
              <video ref={videoRef} style={{ width: '100%', maxWidth: '640px' }} />
              <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />
              <p className="mt-3">{getEmotionMessage()}</p>
              <p>Confidence: {(confidence * 100).toFixed(2)}%</p>
              <Button variant="secondary" onClick={stopCapture}>Stop Camera</Button>
            </>
          ) : (
            <Button variant="primary" onClick={startCapture}>Start Camera</Button>
          )}
        </Col>
      </Row>
    </Container>
  ) 
}

export default Login