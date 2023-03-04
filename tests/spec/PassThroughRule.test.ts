import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { PassThroughRule } from "../../src/spec/PassThroughRule.ts";

Deno.test("apply", () => {
  const rule = new PassThroughRule();
  assertEquals(rule.apply("", 1), "1");
  assertEquals(rule.apply("", 2), "2");
  assertEquals(rule.apply("Fizz", 3), "3");
});

Deno.test("match", () => {
  const rule = new PassThroughRule();
  assertEquals(rule.match("", 0), true);
  assertEquals(rule.match("Fizz", 0), false);
});
