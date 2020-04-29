(function(global) {
  var GithubClient = (function() {
    var _ = Underscore.load();

    function GithubClient(token, owner, repo) {
      this.apiUrl = 'https://api.github.com';
      this.headers = {
        Authorization : 'token ' + token
      };
      this.owner = owner;
      this.repo = repo;

      if (!token) throw new Error('"token"は必須です');
      if (!owner) throw new Error('"owner"は必須です');
    }

    GithubClient.prototype.getSpecificIssue = function (no) {
      if (!no) throw new Error('"no"は必須です');

      return this.fetch_(Utilities.formatString('/repos/%s/%s/issues/%s', this.owner, this.repo, no), { 'method': 'get' });
    };

    GithubClient.prototype.createIssue = function (title, body, options) {
      if (!title) throw new Error('"title"は必須です');
      if (!body) throw new Error('"body"は必須です');

      return this.fetch_(Utilities.formatString('/repos/%s/%s/issues', this.owner, this.repo), { 'method': 'post', 'payload': _.extend({
        title: title,
        body: body
      }, options) });
    };

    GithubClient.prototype.editIssue = function (no, params) {
      if (!no) throw new Error('"no"は必須です');
      if (!params) throw new Error('"params"は必須です');

      return this.fetch_(Utilities.formatString('/repos/%s/%s/issues/%s', this.owner, this.repo, no), { 'method': 'patch', 'payload': params });
    };

    GithubClient.prototype.getUserRepositories = function(options) {
      return this.fetch_(Utilities.formatString('/users/%s/repos?%s', this.owner, this.buildUrlParam_(options)), { 'method': 'get' });
    };

    GithubClient.prototype.getOrgRepositories = function(options) {
      return this.fetch_(Utilities.formatString('/orgs/%s/repos?%s', this.owner, this.buildUrlParam_(options)), { 'method': 'get' });
    };

    GithubClient.prototype.buildUrlParam_ = function (params) {
      if (!params) return '';

      var temp = [];
      for (var key in params) {
        temp.push(Utilities.formatString('%s=%s', key, encodeURIComponent(params[key])));
      }
      return temp.join('&');
    };

    GithubClient.prototype.fetch_ = function(endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        method             : options.method,
        muteHttpExceptions : true,
        contentType        : 'application/json; charset=utf-8',
        headers            : this.headers,
        payload            : JSON.stringify(options.payload) || {}
      });

      var contents;
      try {
        contents = JSON.parse(response.getContentText('utf-8'));
      } catch (err) {
        contents = response.getContentText('utf-8');
      }

      return {
        status   : response.getResponseCode(),
        contents : contents
      };
    };

    return GithubClient;
  })();

  return global.GithubClient = GithubClient;
})(this);
