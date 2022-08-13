import { QueryModel } from "../src/index";
describe("長さNの英小文字からなる文字列Sに対しQ回分のクエリ操作を行う", () => {
  test("Sの末尾の文字を削除し、先頭に挿入するという操作を1回した後の文字列表示", () => {
    const S = "abc";
    const querys = [{ q: 1, x: 1 }];
    const queryModel = new QueryModel(S, querys);
    queryModel.queryOperation();

    expect(queryModel.getS()).toBe("cab");
  });
});
