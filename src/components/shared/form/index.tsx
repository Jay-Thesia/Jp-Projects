import React from 'react';

interface IframeProps {
  src: string;
  title: string;
  width?: string;
  height: string;
  scrolling?: 'auto' | 'no';
}

const JotFormIframe: React.FC<IframeProps> = ({
  src,
  title,
  width = '100%',
  height = '539px',
  scrolling = 'no',
}) => {
  return (
    <iframe
      id="JotFormIFrame-241299402506051"
      title={title}
    //   onLoad="window.parent.scrollTo(0,0)"
    onLoad={undefined}
      allowTransparency={true}
      allow="geolocation; microphone; camera; fullscreen"
      src={src}
      frameBorder="0"
      style={{ minWidth: width, maxWidth: width, height, border: 'none' }}
      scrolling={scrolling}
    />
  );
};

export default JotFormIframe;
