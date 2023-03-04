import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { NumberConverter } from "../src/core/NumberConverter.ts";
import { CyclicNumberRule } from "../src/spec/CyclicNumberRule.ts";
import { PassThroughRule } from "../src/spec/PassThroughRule.ts";

Deno.test("fizzBuzz", () => {
  const fizzBuzz = new NumberConverter([
    new CyclicNumberRule(3, "Fizz"),
    new CyclicNumberRule(5, "Buzz"),
    new PassThroughRule(),
  ]);

  assertEquals(fizzBuzz.convert(1), "1");
  assertEquals(fizzBuzz.convert(2), "2");
  assertEquals(fizzBuzz.convert(3), "Fizz");
  assertEquals(fizzBuzz.convert(4), "4");
  assertEquals(fizzBuzz.convert(5), "Buzz");
  assertEquals(fizzBuzz.convert(6), "Fizz");
  assertEquals(fizzBuzz.convert(10), "Buzz");
  assertEquals(fizzBuzz.convert(15), "FizzBuzz");
  assertEquals(fizzBuzz.convert(30), "FizzBuzz");
});
