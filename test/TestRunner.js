/* global TestCommon */

function TestRunner() { // eslint-disable-line no-unused-vars
  if ((typeof GasTap) === 'undefined') { // GasT Initialization. (only if not initialized yet.)
    eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/zixia/gast/master/src/gas-tap-lib.js').getContentText());
  } // Class GasTap is ready for use now!

  var test = new GasTap();
  var common = new TestCommon();

  try {
    /***** Test cases ******************************/
    testGetSpecificIssue(test, common);
    testCreateIssue(test, common);
    testEditIssue(test, common);
    testGetUserRepositories(test, common);
    testGetOrgRepositories(test, common);
    /***********************************************/
  } catch (err) {
    test('Exception occurred', function f(assert) {
      Logger.log(err);
      assert.fail(err);
    });
  }

  test.finish();

  return {
    successd: test.totalSucceed(),
    failed: test.totalFailed(),
    skipped: test.totalSkipped(),
    log: Logger.getLog()
  };
}

function testGetSpecificIssue(test, common) {
  var client = common.getClientUser();
  var no = common.no;

  test('getSpecificIssue() - 正常系', function (t) {
    var result = client.getSpecificIssue(no);
    t.equal(result.status, 200, 'issueが取得できること');
    t.equal(result.contents.number, no, '"number"が正しいこと');
    t.equal(result.contents.url, Utilities.formatString('https://api.github.com/repos/%s/%s/issues/%s', common.user, common.repo, no), '"url"が正しいこと');
  });

  test('getSpecificIssue() - 異常系', function (t) {
    t.throws(function () {
      return client.getSpecificIssue();
    },
    '"no"を指定していない場合はエラー');
  });
}

function testCreateIssue(test, common) {
  var client = common.getClientUser();
  var title = 'test';
  var body = 'This is test issue.';

  test('createIssue() - 正常系', function (t) {
    var result = client.createIssue(title, body);
    t.equal(result.status, 201, 'issueが作成できること');
    t.equal(JSON.parse(result.body).url, Utilities.formatString('https://api.github.com/repos/%s/%s/issues/%s', common.user, common.repo, JSON.parse(result.body).number), '"url"が正しいこと');
    t.equal(JSON.parse(result.body).title, title, '"title"が正しいこと');
    t.equal(JSON.parse(result.body).body, body, '"body"が正しいこと');

    common.no = JSON.parse(result.body).number;
  });
}

function testEditIssue(test, common) {
  var client = common.getClientUser();
  var no = common.no;
  var title = 'test - edit';
  var body = 'This is test issue.\nEdited this issue.';
  var assign = common.user;
  var label = 'bug';
  var state = 'closed';

  test('editIssue() - 正常系', function (t) {
    var result = client.editIssue(no, {
      title: title,
      body: body,
      assignees: [assign],
      labels: [label],
      state: state
    });
    t.equal(result.status, 200, 'issueが編集できること');
    t.equal(result.contents.url, Utilities.formatString('https://api.github.com/repos/%s/%s/issues/%s', common.user, common.repo, result.contents.number), '"url"が正しいこと');
    t.equal(result.contents.title, title, '"title"が正しいこと');
    t.equal(result.contents.body, body, '"body"が正しいこと');
    t.equal(result.contents.assignees[0].login, assign, '"asign"が正しいこと');
    t.equal(result.contents.labels[0].name, label, '"label"が正しいこと');
    t.equal(result.contents.state, state, '"state"が正しいこと');
  });

  test('editIssue() - 異常系', function (t) {
    t.throws(function () {
      return client.editIssue();
    },
    '"no"を指定していない場合はエラー');
    t.throws(function () {
      return client.editIssue(no);
    },
    '"params"を指定していない場合はエラー');
  });
}

function testGetUserRepositories(test, common) {
  var client = common.getClientUser();

  test('getUserRepositories() - 正常系', function (t) {
    var result = client.getUserRepositories();
    t.equal(result.status, 200, 'repositoryが取得できること');
    t.equal(JSON.parse(result.body)[0].owner.login, common.user, '"owner"が正しいこと');
  });
}

function testGetOrgRepositories(test, common) {
  var client = common.getClientOrg();

  test('getOrgRepositories() - 正常系', function (t) {
    var result = client.getOrgRepositories();
    t.equal(result.status, 200, 'repositoryが取得できること');
    t.equal(JSON.parse(result.body)[0].owner.login, common.org, '"owner"が正しいこと');
  });
}
