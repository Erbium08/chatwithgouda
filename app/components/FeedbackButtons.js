'use client';
import { useState } from 'react';

export default function FeedbackButtons({ messageId, onFeedback }) {
  const [feedback, setFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedback = async (value) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      // Send feedback to the API
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId,
          feedback: value,
        }),
      });
      
      if (response.ok) {
        setFeedback(value);
        if (onFeedback) onFeedback(value);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-buttons">
      <button 
        className={`feedback-button ${feedback === 'thumbs-up' ? 'active' : ''}`}
        onClick={() => handleFeedback('thumbs-up')}
        disabled={feedback !== null || isSubmitting}
        aria-label="Thumbs up"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10v12"/>
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
        </svg>
      </button>
      <button 
        className={`feedback-button ${feedback === 'thumbs-down' ? 'active' : ''}`}
        onClick={() => handleFeedback('thumbs-down')}
        disabled={feedback !== null || isSubmitting}
        aria-label="Thumbs down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 14V2"/>
          <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/>
        </svg>
      </button>
    </div>
  );
}