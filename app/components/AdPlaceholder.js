export default function AdPlaceholder({ type, text }) {
  return (
    <div className={`ad-placeholder ${type}`}>
      {text || "Google Ad Placeholder"}
    </div>
  );
}