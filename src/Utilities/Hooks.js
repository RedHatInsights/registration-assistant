import { useFlag, useFlagsStatus } from '@unleash/proxy-client-react';

export const useFeatureFlag = (flag) => {
  const { flagsReady } = useFlagsStatus();
  const isFlagEnabled = useFlag(flag);
  return flagsReady ? isFlagEnabled : undefined;
};

export const useLightspeedFeatureFlag = () => {
  const isFlagEnabled = useFeatureFlag('platform.lightspeed-rebrand');
  return isFlagEnabled ? 'Lightspeed' : 'Insights';
};
