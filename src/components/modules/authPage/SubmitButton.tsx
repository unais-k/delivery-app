import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  label: string;
};

function SubmitButton({ onSubmit, label }: Props) {
  const [isProcessing, setProcessing] = useState(false);

  const ringSpringProps = useSpring({
    opacity: isProcessing ? 1 : 0,
    rotate: isProcessing ? 360 : 0,
    from: { scale: 0.8 },
    to: { scale: 1.2 },
    reset: true,
    config: { ...config.gentle, duration: 1000 },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    try {
      await onSubmit(event);
    } finally {

        setTimeout(()=>{
            setProcessing(false);
        },5000)
      
    }
  };

  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className={`text-white text-center text-lg font-bold leading-5 justify-center items-stretch bg-gradient-to-r from-zinc-700 to-zinc-800 mt-4 px-6 py-5 rounded-xl max-md:px-5 relative overflow-hidden`}
    >
      <style jsx>{`
        .button-content {
          opacity: ${isProcessing ? 0 : 1};
          transition: opacity 0.3s ease;
        }
        .ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(${ringSpringProps.rotate}deg) scale(${ringSpringProps.scale});
          border: 4px solid transparent;
          border-top-color: #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
        }
      `}</style>
      <div className="button-content">{label}</div>
      {isProcessing && <animated.div className="ring" style={ringSpringProps} />}
    </button>
  );
}

export default SubmitButton;









