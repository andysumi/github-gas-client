(function(global) {
  var GithubClient = (function() {

    function GithubClient(token, owner, repo) {
      this.apiUrl = 'https://api.github.com';
      this.headers = {'Authorization': 'token ' + token};
      this.owner = owner;
      this.repo = repo;

      if (!token) throw new Error('"token"は必須です');
    }

    return GithubClient;
  })();

  return global.GithubClient = GithubClient;
})(this);
