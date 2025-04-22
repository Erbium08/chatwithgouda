import FeedbackButtons from './FeedbackButtons';

export default function MessageBubble({ message, isUser, messageId, onFeedback }) {
  return (
    <div className={`message-container ${isUser ? 'user-container' : 'ai-container'}`}>
      <div className={`message ${isUser ? 'user' : 'ai'}`}>
        {message}
      </div>
      {!isUser && (
        <FeedbackButtons 
          messageId={messageId} 
          onFeedback={onFeedback} 
        />
      )}
    </div>
  );
}