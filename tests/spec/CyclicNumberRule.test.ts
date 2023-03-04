import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { CyclicNumberRule } from "../../src/spec/CyclicNumberRule.ts";

Deno.test("apply", () => {
  const rule = new CyclicNumberRule(0, "Buzz");
  assertEquals(rule.apply("", 0), "Buzz");
  assertEquals(rule.apply("Fizz", 0), "FizzBuzz");
});

Deno.test("match", () => {
  const rule = new CyclicNumberRule(3, "");
  assertEquals(rule.match("", 1), false);
  assertEquals(rule.match("", 3), true);
  assertEquals(rule.match("", 6), true);
});
