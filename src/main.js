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
 * https://developer.github.com/v3/issues/#get-a-single-issue
 * @param {Integer} issueNo 【必須】Issue番号
 * @return {Object} 処理結果
 */
function getSpecificIssue(issueNo) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを作成する
 * https://developer.github.com/v3/issues/#create-an-issue
 * @param {String} title 【必須】タイトル
 * @param {String} body 【必須】本文
 * @param {Object} options 【任意】オプション ※ドキュメントを参照
 * @return {Object} 処理結果
 */
function createIssue(title, body, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを編集する
 * https://developer.github.com/v3/issues/#edit-an-issue
 * @param {Integer} issueNo 【必須】Issue番号
 * @param {Object} options 【任意】オプション ※ドキュメントを参照
 * @return {Object} 処理結果
 */
function editIssue(issueNo, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
