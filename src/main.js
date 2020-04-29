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
 * @param {Integer} no 【必須】Issue番号
 * @return {Object} 処理結果
 */
function getSpecificIssue(no) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを作成する
 * https://developer.github.com/v3/issues/#create-an-issue
 * @param {String} title 【必須】タイトル
 * @param {String} body 【必須】本文
 * @param {Object} options 【任意】オプション ※ドキュメント参照
 * @return {Object} 処理結果
 */
function createIssue(title, body, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを編集する
 * https://developer.github.com/v3/issues/#edit-an-issue
 * @param {Integer} no 【必須】Issue番号
 * @param {Object} params 【必須】パラメーター ※ドキュメント参照
 * @return {Object} 処理結果
 */
function editIssue(no, params) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * ユーザーの公開Repository一覧を取得する
 * https://developer.github.com/v3/repos/#list-user-repositories
 * @param {Objet} options 【任意】オプション ※ドキュメント参照
 * @return {Object} 処理結果
 */
function getUserRepositories(options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 組織のRepository一覧を取得する
 * https://developer.github.com/v3/repos/#list-organization-repositories
 * @param {Objet} options 【任意】オプション ※ドキュメント参照
 * @return {Object} 処理結果
 */
function getOrgRepositories(options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
