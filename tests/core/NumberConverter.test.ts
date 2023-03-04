import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import {
  assertSpyCall,
  assertSpyCalls,
  spy,
} from "https://deno.land/std@0.178.0/testing/mock.ts";
import { NumberConverter } from "../../src/core/NumberConverter.ts";
import { ReplaceRuleInterface } from "../../src/core/ReplaceRuleInterface.ts";

Deno.test("convert with empty rules", () => {
  const fizzBuzz = new NumberConverter([]);
  assertEquals(fizzBuzz.convert(1), "");
});

Deno.test("convert with single rule", () => {
  const rule = createStubRule(true, "Replaced");
  const matchSpy = spy(rule, "match");
  const applySpy = spy(rule, "apply");
  const fizzBuzz = new NumberConverter([rule]);
  assertEquals(fizzBuzz.convert(1), "Replaced");
  assertSpyCall(matchSpy, 0, { args: ["", 1], returned: true });
  assertSpyCall(applySpy, 0, { args: ["", 1], returned: "Replaced" });
});

Deno.test("convert with compositioning rule results", () => {
  const fizzRule = createStubRule(true, "Fizz");
  const buzzRule = createStubRule(true, "FizzBuzz");
  const fizzBuzz = new NumberConverter([fizzRule, buzzRule]);
  const fizzRuleSpy = {
    match: spy(fizzRule, "match"),
    apply: spy(fizzRule, "apply"),
  };
  const buzzRuleSpy = {
    match: spy(buzzRule, "match"),
    apply: spy(buzzRule, "apply"),
  };
  assertEquals(fizzBuzz.convert(1), "FizzBuzz");
  assertSpyCall(fizzRuleSpy.match, 0, { args: ["", 1], returned: true });
  assertSpyCall(fizzRuleSpy.apply, 0, { args: ["", 1], returned: "Fizz" });
  assertSpyCall(buzzRuleSpy.match, 0, { args: ["Fizz", 1], returned: true });
  assertSpyCall(buzzRuleSpy.apply, 0, {
    args: ["Fizz", 1],
    returned: "FizzBuzz",
  });
});

Deno.test("convert with skipping unmatched rules", () => {
  const fizzRule = createStubRule(false, "Fizz");
  const buzzRule = createStubRule(false, "Buzz");
  const skipRule = createStubRule(true, "1");
  const fizzBuzz = new NumberConverter([fizzRule, buzzRule, skipRule]);
  const fizzRuleSpy = {
    match: spy(fizzRule, "match"),
    apply: spy(fizzRule, "apply"),
  };
  const buzzRuleSpy = {
    match: spy(buzzRule, "match"),
    apply: spy(buzzRule, "apply"),
  };
  const skipRuleSpy = {
    match: spy(skipRule, "match"),
    apply: spy(skipRule, "apply"),
  };
  assertEquals(fizzBuzz.convert(1), "1");
  assertSpyCall(fizzRuleSpy.match, 0, { args: ["", 1], returned: false });
  assertSpyCalls(fizzRuleSpy.apply, 0);
  assertSpyCall(buzzRuleSpy.match, 0, { args: ["", 1], returned: false });
  assertSpyCalls(buzzRuleSpy.apply, 0);
  assertSpyCall(skipRuleSpy.match, 0, { args: ["", 1], returned: true });
  assertSpyCall(skipRuleSpy.apply, 0, { args: ["", 1], returned: "1" });
});

const createStubRule = (
  matchResult: boolean,
  applyResult: string
): ReplaceRuleInterface => {
  return { match: () => matchResult, apply: () => applyResult };
};
