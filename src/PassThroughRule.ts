import { ReplaceRuleInterface } from "./ReplaceRuleInterface.ts";

export class PassThroughRule implements ReplaceRuleInterface {
  apply(_: string, n: number): string {
    return String(n);
  }

  match(carry: string, _: number): boolean {
    return carry === "";
  }
}
