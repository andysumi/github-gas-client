var TestCommon = function () {
  var properties = PropertiesService.getUserProperties();
  this.token = properties.getProperty('TOKEN');
  this.user = properties.getProperty('USER');
  this.org = properties.getProperty('ORGANIZATION');
  this.repo = properties.getProperty('REPOSITORY');
  this.no = 1;
};

TestCommon.prototype.getClientUser = function () {
  this.client = new GithubClient(this.token, this.user, this.repo);
  return this.client;
};

TestCommon.prototype.getClientOrg = function () {
  this.client = new GithubClient(this.token, this.org);
  return this.client;
};
