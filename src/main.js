/**
 * Github Clientのインスタンスを作成する
 * @param {String} token 【必須】APIアクセストークン
 * @param {String} repo 【任意】リポジトリ
 * @return {GithubClient} Github Clientのインスタンス
 */
function create(token, owner, repo) { // eslint-disable-line no-unused-vars
  return new GithubClient(token, owner, repo);
}
