export class Vector {
  constructor(public components: number[]) {
  }

  add(vector: Vector): Vector {
    if(this.components.length !== vector.components.length) throw new Error();

    let temp: number[] = [];

    for(let i = 0; i < this.components.length; i++) {
      temp.push(this.components[i] + vector.components[i]);
    }

    return new Vector(temp);
  }

  subtract(vector: Vector): Vector {
    if(this.components.length !== vector.components.length) throw new Error();

    let temp: number[] = [];

    for(let i = 0; i < this.components.length; i++) {
      temp.push(this.components[i] - vector.components[i]);
    }

    return new Vector(temp);
  }

  dot(vector: Vector): number {
    if(this.components.length !== vector.components.length) throw new Error();

    return this.components.reduce((prev, cur, i) => prev + cur * vector.components[i], 0);
  }

  norm(): number {
    return Math.sqrt(this.components.reduce((prev, cur) => prev + Math.pow(cur, 2), 0));
  }

  toString(): string {
    let combined = this.components.join(",");
    return `(${combined})`;
  }

  equals(vector: Vector): boolean {
    if(this.components.length !== vector.components.length) return false;

    for(let i = 0; i < vector.components.length; i++) {
      if(this.components[i] !== vector.components[i]) {
        return false;
      }
    }

    return true;
  }
}
