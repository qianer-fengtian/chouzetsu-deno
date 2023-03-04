import { ReplaceRuleInterface } from "../core/ReplaceRuleInterface.ts";

export class CyclicNumberRule implements ReplaceRuleInterface {
  constructor(
    private readonly base: number,
    private readonly replacement: string
  ) {}

  apply(carry: string, _: number): string {
    return carry + this.replacement;
  }

  match(_: string, n: number): boolean {
    return n % this.base === 0;
  }
}
