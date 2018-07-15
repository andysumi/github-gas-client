/**
 * Github Clientのインスタンスを作成する
 * @param {String} token 【必須】APIアクセストークン
 * @param {String} owner 【必須】リポジトリのオーナー
 * @param {String} repo 【任意】リポジトリ
 * @return {GithubClient} Github Clientのインスタンス
 */
function create(token, owner, repo) { // eslint-disable-line no-unused-vars
  return new GithubClient(token, owner, repo);
}

/**
 * 特定のIssueを取得する
 * @param {Integer} issueNo 【必須】Issue番号
 * @return {Object} 取得したIssueのオブジェクト
 */
function getSpecificIssue(issueNo) { // eslint-disable-line
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
