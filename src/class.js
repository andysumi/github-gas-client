(function(global) {
  var GithubClient = (function() {

    function GithubClient(token, owner, repo) {
      this.apiUrl = 'https://api.github.com';
      this.headers = {'Authorization': 'token ' + token};
      this.owner = owner;
      this.repo = repo;

      if (!token) throw new Error('"token"は必須です');
    }

    GithubClient.prototype.getSpecificIssue = function(issueNo) {
      return this.fetch_('/repos/' + this.owner + '/' + this.repoName + '/issues/' + issueNo, {'method': 'get'});
    };

    return GithubClient;
  })();

  return global.GithubClient = GithubClient;
})(this);
