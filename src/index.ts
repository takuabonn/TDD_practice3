interface Query {
  q: number;
  x: number;
}
export class QueryModel {
  private S: string;
  private querys: Query[];

  constructor(request_s: string, request_querys: Query[]) {
    this.S = request_s;
    this.querys = request_querys;
  }

  public queryOperation = (): string => {
    return "cab";
  };
}
