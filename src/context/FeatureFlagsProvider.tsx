import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

const FeatureFlagsContext = createContext({
  featureFlags: [] as string[],
});

type FeatureFlagsProviderProps = PropsWithChildren<Record<string, unknown>>;

const FeatureFlagsProvider: FC<FeatureFlagsProviderProps> = ({ children }) => {
  const value = useMemo(
    () => ({
      featureFlags: process.env.NEXT_PUBLIC_FEATURE_FLAGS?.split(',') ?? [],
    }),
    [],
  );

  return (
    <FeatureFlagsContext.Provider value={value}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export function useFeatureFlags(ids: string[]): boolean[] {
  const { featureFlags } = useContext(FeatureFlagsContext);

  return ids.map((id) => featureFlags.includes(id));
}

export function useFeatureFlag(id: string): boolean {
  const { featureFlags } = useContext(FeatureFlagsContext);

  return featureFlags.includes(id);
}

export default FeatureFlagsProvider;
