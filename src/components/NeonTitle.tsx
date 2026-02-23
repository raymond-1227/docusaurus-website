import React from 'react';

export default function NeonTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="lilita-stack">
      <span className="lilita-neon-outline">{children}</span>
      <span className="lilita-neon-fill">{children}</span>
    </span>
  );
}