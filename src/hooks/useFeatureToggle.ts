import { useContext } from 'react';

import { FeatureToggleContext } from '../context/featureToggleContext';

const useFeatureToggle = () => {
  const { enabledFeatures } = useContext(FeatureToggleContext);
  const isEnabled = (featureName: string) =>
    enabledFeatures.includes(featureName);

  return [isEnabled];
};

export default useFeatureToggle;
