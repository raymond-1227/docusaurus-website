import React from 'react';

export default function GoldTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="lilita-stack">
      <span className="lilita-gold-outline">{children}</span>
      <span className="lilita-gold-fill">{children}</span>
    </span>
  );
}