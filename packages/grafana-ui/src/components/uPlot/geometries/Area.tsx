import React, { useCallback } from 'react';
import { getAreaConfig } from './configGetters';
import { AreaProps } from './types';
import { useSeriesGeometry } from './SeriesGeometry';

export const Area: React.FC<AreaProps> = ({ fill = 0.1, scaleKey, color }) => {
  const getConfig = useCallback(() => getAreaConfig({ fill, scaleKey, color }), [fill, scaleKey, color]);
  useSeriesGeometry(getConfig);

  return null;
};

Area.displayName = 'Area';
