import { FC } from 'react';

import { FeatureToggleContext } from '~/context/featureToggleContext';

type FeatureToggleProps = {
  children: React.ReactNode;
  enabledFeatures: string[];
};

const FeatureToggle: FC<FeatureToggleProps> = ({
  children,
  enabledFeatures,
}) => {
  return (
    <FeatureToggleContext.Provider value={{ enabledFeatures }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};

export default FeatureToggle;
