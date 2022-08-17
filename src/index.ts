interface Query {
  q: number;
  x: number;
}
export class QueryModel {
  private S: string[];
  private querys: Query[];
  private extractStrings: string[];
  private currentIndex: number;

  constructor(request_s: string[], request_querys: Query[]) {
    this.S = request_s;
    this.querys = request_querys;
    this.extractStrings = [];
    this.currentIndex = 0;
  }

  public queryOperation = () => {
    this.querys.forEach((quey) => {
      if (quey.q === 1) {
        this.currentIndex -= quey.x;
        if (this.currentIndex < 0) {
          this.currentIndex += this.S.length;
        }
      }

      if (quey.q === 2) {
        let l = this.currentIndex + (quey.x - 1);
        if (l > this.S.length - 1) {
          l = l - this.S.length;
        }

        this.extractStrings.push(this.S[l]);
      }
    });
  };

  public getS = () => {
    return this.S;
  };

  public getExtractStrings = () => {
    return this.extractStrings;
  };
}
