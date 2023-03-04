import { ReplaceRuleInterface } from "./ReplaceRuleInterface.ts";

export class NumberConverter {
  constructor(private readonly rules: ReplaceRuleInterface[]) {}

  convert(n: number): string {
    return this.rules.reduce((carry, rule) => {
      return rule.match(carry, n) ? rule.apply(carry, n) : carry;
    }, "");
  }
}
