import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import Threads from './Threads';

const hexToRgb = (hex) => {
  const c = hex.replace('#', '').padEnd(6, '0');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const ThreadsWrapper = ({ color = '#FFFFFF', amplitude = 1, distance = 0, enableMouseInteraction = false, ...rest }) => {
  const rgbColor = hexToRgb(color);
  return <Threads color={rgbColor} amplitude={amplitude} distance={distance} enableMouseInteraction={enableMouseInteraction} {...rest} />;
};

export default declareComponent(ThreadsWrapper, {
  name: 'Threads',
  description: 'Animated thread lines with perlin noise and mouse interaction',
  group: 'Effects',
  props: {
    color: props.Text({
      name: 'Color',
      defaultValue: '#FFFFFF',
    }),
    amplitude: props.Number({
      name: 'Amplitude',
      defaultValue: 1,
      min: 0,
      max: 5,
      step: 0.1,
    }),
    distance: props.Number({
      name: 'Distance',
      defaultValue: 0,
      min: -2,
      max: 2,
      step: 0.1,
    }),
    enableMouseInteraction: props.Boolean({
      name: 'Enable Mouse Interaction',
      defaultValue: false,
    }),
  },
});
