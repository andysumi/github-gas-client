var TestCommon = function() {
  var properties = PropertiesService.getUserProperties();
  this.token = properties.getProperty('TOKEN');
  this.owner = properties.getProperty('OWNER');
  this.repo = properties.getProperty('REPOSITORY');
};

TestCommon.prototype.getClient = function() {
  this.client = new GithubClient(this.token, this.owner, this.repo);
  return this.client;
};
