import { useContext } from 'react';

import { FeatureFlagsContext } from '~/context/featureFlagsContext';

const useFeatureFlags = () => {
  const { enabledFeatures } = useContext(FeatureFlagsContext);
  const isEnabled = (featureName: string) =>
    enabledFeatures.includes(featureName);

  return [isEnabled];
};

export default useFeatureFlags;
