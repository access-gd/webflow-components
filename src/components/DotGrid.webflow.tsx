import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import DotGrid from './DotGrid';

export default declareComponent(DotGrid, {
  name: 'Dot Grid',
  description: 'Interactive dot grid with mouse interaction and physics-based animation',
  group: 'Effects',
  props: {
    dotSize: props.Number({
      name: 'Dot Size',
      defaultValue: 16,
      min: 4,
      max: 50,
      step: 1,
    }),
    gap: props.Number({
      name: 'Gap Between Dots',
      defaultValue: 32,
      min: 4,
      max: 100,
      step: 1,
    }),
    baseColor: props.Text({
      name: 'Base Color',
      defaultValue: '#5227FF',
    }),
    activeColor: props.Text({
      name: 'Active Color',
      defaultValue: '#5227FF',
    }),
    proximity: props.Number({
      name: 'Proximity Radius',
      defaultValue: 150,
      min: 50,
      max: 500,
      step: 10,
    }),
    speedTrigger: props.Number({
      name: 'Speed Trigger',
      defaultValue: 100,
      min: 0,
      max: 500,
      step: 10,
    }),
    shockRadius: props.Number({
      name: 'Shock Radius',
      defaultValue: 250,
      min: 50,
      max: 500,
      step: 10,
    }),
    shockStrength: props.Number({
      name: 'Shock Strength',
      defaultValue: 5,
      min: 0,
      max: 20,
      step: 0.5,
    }),
    maxSpeed: props.Number({
      name: 'Max Speed',
      defaultValue: 5000,
      min: 1000,
      max: 20000,
      step: 500,
    }),
    resistance: props.Number({
      name: 'Resistance',
      defaultValue: 750,
      min: 100,
      max: 2000,
      step: 50,
    }),
    returnDuration: props.Number({
      name: 'Return Duration',
      defaultValue: 1.5,
      min: 0.5,
      max: 5,
      step: 0.1,
    }),
  },
});
