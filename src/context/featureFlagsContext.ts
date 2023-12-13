import { createContext } from 'react';

export const FeatureFlagsContext = createContext({
  enabledFeatures: [] as string[],
});
