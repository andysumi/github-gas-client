(function(global) {
  var GithubClient = (function() {

    function GithubClient(token, owner, repo) {
      this.apiUrl = 'https://api.github.com';
      this.headers = {
        Authorization : 'token ' + token
      };
      this.owner = owner;
      this.repo = repo;

      if (!token) throw new Error('"token"は必須です');
    }

    GithubClient.prototype.getSpecificIssue = function(issueNo) {
      return this.fetch_('/repos/' + this.owner + '/' + this.repo + '/issues/' + issueNo, {'method': 'get'});
    };

    GithubClient.prototype.createIssue = function(title, body, options) {
      var params = {
        title : title,
        body  : body
      };
      if (options) {
        for (var key in options) {
          params[key] = options[key];
        }
      }
      return this.fetch_('/repos/' + this.owner + '/' + this.repo +'/issues', {'method': 'post', 'payload': params});
    };

    GithubClient.prototype.editIssue = function(issueNo, options) {
      var params = {};
      if (options) {
        for (var key in options) {
          params[key] = options[key];
        }
      }
      return this.fetch_('/repos/' + this.owner + '/' + this.repo +'/issues/' + issueNo, {'method': 'patch', 'payload': params});
    };

    GithubClient.prototype.getUserRepositories = function(options) {
      var params = [];
      if (options) {
        for (var key in options) {
          params.push(key + '=' + options[key]);
        }
        params = '?' + params.join('&');
      }
      return this.fetch_('/users/' + this.owner + '/repos' + params, {'method': 'get'});
    };

    GithubClient.prototype.getOrgRepositories = function(options) {
      var params = [];
      if (options) {
        for (var key in options) {
          params.push(key + '=' + options[key]);
        }
        params = '?' + params.join('&');
      }
      return this.fetch_('/orgs/' + this.owner + '/repos' + params, {'method': 'get'});
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

      return {
        status : response.getResponseCode(),
        body   : response.getContentText()
      };
    };

    return GithubClient;
  })();

  return global.GithubClient = GithubClient;
})(this);
