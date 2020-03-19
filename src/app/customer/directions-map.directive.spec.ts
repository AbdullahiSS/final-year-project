import { DirectionsMapDirective } from './directions-map.directive';
import { GoogleMapsAPIWrapper } from '@agm/core';

describe('DirectionsMapDirective', () => {
  it('should create an instance', () => {
    const directive = new DirectionsMapDirective();
    expect(directive).toBeTruthy();
  });
});
