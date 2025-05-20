'use client';
import { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Gouda. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState({});
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFeedback = (messageId, feedback) => {
    setFeedbackStatus(prev => ({
      ...prev,
      [messageId]: feedback
    }));
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Call the API with the user's message
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          model_name: 'gouda0.0.1',
          max_tokens: 100,
          context: messages.slice(-5).map(m => ({ text: m.text, isUser: m.isUser }))
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from model');
      }
      
      const data = await response.json();
      
      // Add AI response
      const aiMessageId = Date.now() + 1;
      setMessages(prev => [
        ...prev, 
        { id: aiMessageId, text: data.response, isUser: false }
      ]);
    } catch (error) {
      console.error('Error getting response:', error);
      setMessages(prev => [
        ...prev, 
        { id: Date.now() + 1, text: "Sorry, I couldn't process your request.", isUser: false }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map(message => (
          <MessageBubble 
            key={message.id}
            messageId={message.id}
            message={message.text}
            isUser={message.isUser}
            onFeedback={(feedback) => handleFeedback(message.id, feedback)}
          />
        ))}
        {isLoading && (
          <div className="message-container ai-container">
            <div className="message ai">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Gouda something..."
          disabled={isLoading}
        />
        <button 
          className="send-button"
          onClick={handleSend}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
}