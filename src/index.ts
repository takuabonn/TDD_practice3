import { LanguageServiceMode } from "typescript";

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

  public queryOperation = () => {
    this.querys.forEach((quey) => {
      if (quey.q === 1) {
        const currentS = this.S;
        const lastS = currentS.slice(-1);
        this.S = lastS + currentS.slice(0, currentS.length - 1);
      }
    });
  };

  public getS = () => {
    return this.S;
  };
}
