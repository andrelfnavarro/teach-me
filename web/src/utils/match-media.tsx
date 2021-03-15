import React from 'react';

export const useMedia = (query: string) => {
  const [matches, setMatches] = React.useState(window.matchMedia(query).matches);

  // cDM, cDU
  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const Breakpoint = {
  xs: '0em',
  sm: '48em',
  md: '64em',
  lg: '75em',
};
