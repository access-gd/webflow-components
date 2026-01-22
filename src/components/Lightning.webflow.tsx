import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import Lightning from './Lightning';

export default declareComponent(Lightning, {
  name: 'Lightning',
  description: 'Animated procedural lightning effect with customizable hue and parameters',
  group: 'Effects',
  props: {
    hue: props.Number({
      name: 'Hue',
      defaultValue: 230,
      min: 0,
      max: 360,
      step: 1,
    }),
    xOffset: props.Number({
      name: 'Horizontal Offset',
      defaultValue: 0,
      min: -5,
      max: 5,
      step: 0.1,
    }),
    speed: props.Number({
      name: 'Animation Speed',
      defaultValue: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    }),
    intensity: props.Number({
      name: 'Intensity',
      defaultValue: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    }),
    size: props.Number({
      name: 'Effect Size',
      defaultValue: 1,
      min: 0.5,
      max: 5,
      step: 0.1,
    }),
  },
});
