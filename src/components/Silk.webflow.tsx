import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import Silk from './Silk';

export default declareComponent(Silk, {
  name: 'Silk',
  description: 'An animated silk texture background component with shader effects',
  group: 'Effects',
  props: {
    speed: props.Number({
      name: 'Animation Speed',
      defaultValue: 5,
      min: 0,
      max: 20,
      step: 0.5,
    }),
    scale: props.Number({
      name: 'Pattern Scale',
      defaultValue: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    }),
    color: props.Text({
      name: 'Color',
      defaultValue: '#7B7481',
    }),
    noiseIntensity: props.Number({
      name: 'Noise Intensity',
      defaultValue: 1.5,
      min: 0,
      max: 5,
      step: 0.1,
    }),
    rotation: props.Number({
      name: 'Rotation',
      defaultValue: 0,
      min: 0,
      max: Math.PI * 2,
      step: 0.1,
    }),
  },
});
