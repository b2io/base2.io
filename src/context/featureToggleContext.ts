import { createContext } from 'react';

export const FeatureToggleContext = createContext({
  enabledFeatures: [] as string[],
});
