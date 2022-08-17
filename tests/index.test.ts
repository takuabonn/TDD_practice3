import { QueryModel } from "../src/index";
describe("長さNの英小文字からなる文字列Sに対しQ回分のクエリ操作を行う", () => {
  test("Sの末尾の文字を先頭に挿入するという操作を1回行った後の2番目の文字 === a", () => {
    const S = "abc";
    const querys = [
      { q: 1, x: 1 },
      { q: 2, x: 2 },
    ];
    const queryModel = new QueryModel([...S], querys);
    queryModel.queryOperation();

    expect(queryModel.getExtractStrings()[0]).toBe("a");
  });
  test("1xを適用した後、2xを適用するのを２セットして取得できる文字配列=== [c,c]", () => {
    const S = "abc";
    const querys = [
      { q: 1, x: 1 },
      { q: 2, x: 1 },
      { q: 1, x: 1 },
      { q: 2, x: 2 },
    ];
    const queryModel = new QueryModel([...S], querys);
    queryModel.queryOperation();

    expect(queryModel.getExtractStrings()[0]).toBe("c");
    expect(queryModel.getExtractStrings()[1]).toBe("c");
  });
});
