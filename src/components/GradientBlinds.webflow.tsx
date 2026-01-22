import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import GradientBlinds from './GradientBlinds';

export default declareComponent(GradientBlinds, {
  name: 'Gradient Blinds',
  description: 'An animated gradient effect with dynamic blinds and spotlight interaction',
  group: 'Effects',
  props: {
    gradientColors: props.Text({
      name: 'Gradient Colors',
      defaultValue: '#FF9FFC,#5227FF',
    }),
    angle: props.Number({
      name: 'Angle',
      defaultValue: 0,
      min: 0,
      max: 360,
      step: 1,
    }),
    noise: props.Number({
      name: 'Noise Intensity',
      defaultValue: 0.3,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    blindCount: props.Number({
      name: 'Blind Count',
      defaultValue: 16,
      min: 1,
      max: 128,
      step: 1,
    }),
    blindMinWidth: props.Number({
      name: 'Blind Minimum Width',
      defaultValue: 60,
      min: 0,
      max: 500,
      step: 5,
    }),
    mouseDampening: props.Number({
      name: 'Mouse Dampening',
      defaultValue: 0.15,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    mirrorGradient: props.Boolean({
      name: 'Mirror Gradient',
      defaultValue: false,
    }),
    spotlightRadius: props.Number({
      name: 'Spotlight Radius',
      defaultValue: 0.5,
      min: 0.1,
      max: 2,
      step: 0.05,
    }),
    spotlightSoftness: props.Number({
      name: 'Spotlight Softness',
      defaultValue: 1,
      min: 0.5,
      max: 3,
      step: 0.1,
    }),
    spotlightOpacity: props.Number({
      name: 'Spotlight Opacity',
      defaultValue: 1,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    distortAmount: props.Number({
      name: 'Distortion Amount',
      defaultValue: 0,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    shineDirection: props.Variant({
      name: 'Shine Direction',
      options: ['left', 'right'],
      defaultValue: 'left',
    }),
    mixBlendMode: props.Variant({
      name: 'Mix Blend Mode',
      options: ['lighten', 'screen', 'overlay', 'multiply', 'normal'],
      defaultValue: 'lighten',
    }),
    backgroundColor: props.Text({
      name: 'Background Color',
      defaultValue: '#000000',
    }),
  },
});
