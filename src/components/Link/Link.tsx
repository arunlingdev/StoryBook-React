import React from 'react';
import './link.css';

export interface Link {
  /* Holds the navigating url */
  linkUrl: string;

  /* Holds the label of the link */
  label: string;
}

export const Anchorlink = ({ linkUrl, label, ...props }: Link) => {
  return (
    <div className={['custom-links'].join(' ')}>
      <a href={linkUrl}>{label}</a>
    </div>
  );
};
