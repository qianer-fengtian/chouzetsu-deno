import { Math } from "./Math.ts";

export class MathUtil {
  saturate(value: number, minValue: number, maxValue: number) {
    const math = new Math();
    return math.min(math.max(value, minValue), maxValue);
  }
}
