var strategy = require('..');

describe('passport-oauth', function() {
  
  it('should export Strategy constructor directly from package', function() {
    expect(strategy).to.be.a('function');
    expect(strategy).to.equal(strategy.Strategy);
  });
  
  it('should export Error constructors', function() {
    expect(strategy.InternalOAuthError).to.be.a('function');
  });
  
});
