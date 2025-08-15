import "./QueueLoader.css";
export default function QueueLoader({className}) {
  return (
    <div className= {`queue-loader ${className}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
