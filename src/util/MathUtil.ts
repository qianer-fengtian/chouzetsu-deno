import { Math } from "./Math.ts";

export class MathUtil {
  constructor(private readonly math: Math) {}

  saturate(value: number, minValue: number, maxValue: number) {
    return this.math.min(this.math.max(value, minValue), maxValue);
  }
}
