import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`font-inter font-black tracking-tighter text-white select-none ${className}`}>
      found it<span className="text-brand-orange">.</span>
    </div>
  );
};

export default Logo;