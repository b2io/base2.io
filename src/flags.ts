export const checkClientSideFlag = (featureName: string): boolean => {
  return process.env[`NEXT_PUBLIC_${featureName}`] === 'true';
};

export interface FeatureFlags {
  showXmasMarquee: boolean;
}

let cachedServerSideFlags: FeatureFlags | null = null;

export const fetchServerSideFlags = async (): Promise<FeatureFlags> => {
  if (cachedServerSideFlags) {
    return cachedServerSideFlags;
  }

  const flags = {
    showXmasMarquee: process.env.SHOW_XMAS_MARQUEE === 'true',
  };

  // Cache the flags for future requests
  cachedServerSideFlags = flags;

  return flags;
};
