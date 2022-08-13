import { QueryModel } from "../src/index";
describe("長さNの英小文字からなる文字列Sに対しQ回分のクエリ操作を行う", () => {
  test("Sの末尾の文字を削除し、先頭に挿入するという操作を1回した後の文字列表示", () => {
    const S = "abc";
    const querys = [{ q: 1, x: 1 }];
    const queryModel = new QueryModel(S, querys);
    queryModel.queryOperation();

    expect(queryModel.getS()).toBe("cab");
  });

  test("Sの末尾の文字を削除し、先頭に挿入するという操作を2回した後の文字列表示", () => {
    const S = "abc";
    const querys = [{ q: 1, x: 2 }];
    const queryModel = new QueryModel(S, querys);
    queryModel.queryOperation();

    expect(queryModel.getS()).toBe("bca");
  });

  test("Sの末尾の文字を削除し、先頭に挿入するという操作を文字列の数と同じだけ行った時", () => {
    const S = "abc";
    const querys = [{ q: 1, x: 3 }];
    const queryModel = new QueryModel(S, querys);
    queryModel.queryOperation();

    expect(queryModel.getS()).toBe("abc");
  });

  test("Sの末尾の文字を先頭に挿入するという操作を1回行った後の2番目の文字 === a", () => {
    const S = "abc";
    const querys = [
      { q: 1, x: 1 },
      { q: 2, x: 2 },
    ];
    const queryModel = new QueryModel(S, querys);
    queryModel.queryOperation();

    expect(queryModel.getS()).toBe("cab");
    expect(queryModel.getExtractStrings()[0]).toBe("a");
  });
});
