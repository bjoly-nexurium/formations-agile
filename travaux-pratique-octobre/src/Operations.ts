export default class Add {
  private a: number;

  private b: number;

  constructor(a: number, b:number) {
    this.a = a;
    this.b = b;
  }

  sum(): number {
    return this.a + this.b;
  }

  diff(): number {
    return this.a - this.b;
  }
}
