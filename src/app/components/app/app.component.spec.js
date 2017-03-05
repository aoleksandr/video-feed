import appName from './app.module';

describe('appComponent', () => {
  let scope, element;

  beforeEach(() => {
    angular.mock.module(appName);

    angular.mock.inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = $compile(angular.element('<app/>'))(scope);
    })
  });

  it('should output the text', () => {
    expect(element.text()).toBe('angular works');
  })
});