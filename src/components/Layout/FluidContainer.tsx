import React from 'react';

interface FluidContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FluidContainer: React.FC<FluidContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-[1440px] ${className}`.trim()}>
      {children}
    </div>
  );
};

export default FluidContainer;
