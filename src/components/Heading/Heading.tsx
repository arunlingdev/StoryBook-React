import React from 'react';
import './heading.css';

export interface Headings {
  /* Holds the tag options from h1 - h6 */
  headerTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /* Holds the contents of the heading */
  headerLabel: string;

  /*holds user label custom class names*/
  classNames: string;

  ariaLavel: number;
}

export const Heading = ({ headerTag, headerLabel, classNames, ariaLavel }: Headings) => {
  // const headingTag: string = `<${headerTag} role="heading" aria-level=${ariaLavel}>${headerLabel}</${headerTag}>`;
  const headingTag: string = `<${headerTag}>${headerLabel}</${headerTag}>`;
  return (
    <>
      {/* <span className="hide">{areaLabel}</span> */}
      <div
        // area-label={areaLabel}
        className={`custom-heading ${classNames}`}
        dangerouslySetInnerHTML={{ __html: headingTag }}
      />
    </>
  );
};
