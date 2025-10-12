import { useEffect, useState } from 'react';

const Loading = () => {
  const [text, setText] = useState('Awakening Tomorrow');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev => prev.endsWith('...') ? 'Awakening Tomorrow' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-cosmic">
      <div className="loading-spinner mb-6"></div>
      <p className="text-xl md:text-2xl glow-cyan orbitron">{text}</p>
    </div>
  );
};

export default Loading;
