export const isFeatureEnabled = (featureName: string): boolean => {
  return process.env[featureName] === 'true';
};
