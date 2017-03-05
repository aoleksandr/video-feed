/* eslint-env jasmine */
/* global angular */
import appName from '../app.module';

describe('formatNumber filter', () => {
  let filter;

  beforeEach(() => {
    angular.mock.module(appName);

    angular.mock.inject((_$filter_) => {
      filter = _$filter_('formatNumber');
    });
  });

  it('should output numbers < 1000 as is', () => {
    expect(filter('567')).toBe('567');
  });

  it('should output k numbers', () => {
    expect(filter('1567')).toBe('1.6k');
    expect(filter('1000')).toBe('1k');
  });

  it('should output M numbers', () => {
    expect(filter('1000000')).toBe('1m');
    expect(filter('1500123')).toBe('1.5m');
  });
});