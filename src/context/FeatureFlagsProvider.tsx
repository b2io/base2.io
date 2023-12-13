import { FC } from 'react';

import { FeatureFlagsContext } from './featureFlagsContext';

type FeatureToggleProps = {
  children: React.ReactNode;
  enabledFeatures: string[];
};

const FeatureToggle: FC<FeatureToggleProps> = ({
  children,
  enabledFeatures,
}) => {
  return (
    <FeatureFlagsContext.Provider value={{ enabledFeatures }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureToggle;
