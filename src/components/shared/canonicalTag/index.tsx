import { REACT_APP_URL } from 'config';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalTag: React.FC = () => {
  const location = useLocation();
  const canonicalUrl = `${REACT_APP_URL}${location.pathname}`;

  useEffect(() => {
    let link = document.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    return () => {
      if (link) {
        document.head.removeChild(link);
      }
    };
  }, [canonicalUrl]);

  return null;
};

export default CanonicalTag;
