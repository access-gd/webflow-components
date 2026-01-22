import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import Beams from './Beams';

export default declareComponent(Beams, {
  name: 'Beams',
  description: 'Animated light beams with procedural noise and dynamic shader effects',
  group: 'Effects',
  props: {
    beamWidth: props.Number({
      name: 'Beam Width',
      defaultValue: 2,
      min: 0.5,
      max: 10,
      step: 0.1,
    }),
    beamHeight: props.Number({
      name: 'Beam Height',
      defaultValue: 15,
      min: 5,
      max: 50,
      step: 1,
    }),
    beamNumber: props.Number({
      name: 'Beam Count',
      defaultValue: 12,
      min: 1,
      max: 50,
      step: 1,
    }),
    lightColor: props.Text({
      name: 'Light Color',
      defaultValue: '#ffffff',
    }),
    speed: props.Number({
      name: 'Animation Speed',
      defaultValue: 2,
      min: 0,
      max: 10,
      step: 0.1,
    }),
    noiseIntensity: props.Number({
      name: 'Noise Intensity',
      defaultValue: 1.75,
      min: 0,
      max: 5,
      step: 0.1,
    }),
    scale: props.Number({
      name: 'Noise Scale',
      defaultValue: 0.2,
      min: 0.05,
      max: 1,
      step: 0.05,
    }),
    rotation: props.Number({
      name: 'Rotation',
      defaultValue: 0,
      min: 0,
      max: 360,
      step: 1,
    }),
  },
});
