import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import Ballpit from './Ballpit';

const hexToDecimal = (hex) => {
  return parseInt(hex.replace('#', ''), 16);
};

const BallpitWrapper = ({
  count = 200,
  ballColor = '#FF0000',
  ambientColor = '#FFFFFF',
  ambientIntensity = 1,
  lightIntensity = 200,
  metalness = 0.5,
  roughness = 0.5,
  clearcoat = 1,
  clearcoatRoughness = 0.15,
  minSize = 0.5,
  maxSize = 1,
  gravity = 0.5,
  friction = 0.9975,
  wallBounce = 0.95,
  followCursor = true,
  ...rest
}) => {
  const ballColorDecimal = hexToDecimal(ballColor);
  const ambientColorDecimal = hexToDecimal(ambientColor);

  return (
    <Ballpit
      count={count}
      colors={[ballColorDecimal, ballColorDecimal, ballColorDecimal]}
      ambientColor={ambientColorDecimal}
      ambientIntensity={ambientIntensity}
      lightIntensity={lightIntensity}
      materialParams={{
        metalness,
        roughness,
        clearcoat,
        clearcoatRoughness
      }}
      minSize={minSize}
      maxSize={maxSize}
      gravity={gravity}
      friction={friction}
      wallBounce={wallBounce}
      followCursor={followCursor}
      {...rest}
    />
  );
};

export default declareComponent(BallpitWrapper, {
  name: 'Ballpit',
  description: 'Interactive 3D ball pit with physics simulation and mouse interaction',
  group: 'Effects',
  props: {
    count: props.Number({
      name: 'Ball Count',
      defaultValue: 200,
      min: 10,
      max: 1000,
      step: 10,
    }),
    ballColor: props.Text({
      name: 'Ball Color',
      defaultValue: '#FF0000',
    }),
    ambientColor: props.Text({
      name: 'Ambient Light Color',
      defaultValue: '#FFFFFF',
    }),
    ambientIntensity: props.Number({
      name: 'Ambient Intensity',
      defaultValue: 1,
      min: 0,
      max: 5,
      step: 0.1,
    }),
    lightIntensity: props.Number({
      name: 'Light Intensity',
      defaultValue: 200,
      min: 0,
      max: 1000,
      step: 10,
    }),
    metalness: props.Number({
      name: 'Metalness',
      defaultValue: 0.5,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    roughness: props.Number({
      name: 'Roughness',
      defaultValue: 0.5,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    clearcoat: props.Number({
      name: 'Clearcoat',
      defaultValue: 1,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    clearcoatRoughness: props.Number({
      name: 'Clearcoat Roughness',
      defaultValue: 0.15,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    minSize: props.Number({
      name: 'Min Ball Size',
      defaultValue: 0.5,
      min: 0.1,
      max: 5,
      step: 0.1,
    }),
    maxSize: props.Number({
      name: 'Max Ball Size',
      defaultValue: 1,
      min: 0.1,
      max: 5,
      step: 0.1,
    }),
    gravity: props.Number({
      name: 'Gravity',
      defaultValue: 0.5,
      min: 0,
      max: 2,
      step: 0.1,
    }),
    friction: props.Number({
      name: 'Friction',
      defaultValue: 0.9975,
      min: 0.9,
      max: 0.9999,
      step: 0.0001,
    }),
    wallBounce: props.Number({
      name: 'Wall Bounce',
      defaultValue: 0.95,
      min: 0,
      max: 1,
      step: 0.05,
    }),
    followCursor: props.Boolean({
      name: 'Follow Cursor',
      defaultValue: true,
    }),
  },
});
