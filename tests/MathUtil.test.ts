import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { MathUtil } from "../src/MathUtil.ts";

Deno.test("saturate", () => {
  const mathUtil = new MathUtil();
  assertEquals(mathUtil.saturate(2, 1, 3), 2);
  assertEquals(mathUtil.saturate(0, 1, 3), 1);
  assertEquals(mathUtil.saturate(4, 1, 3), 3);
  assertEquals(mathUtil.saturate(1, 1, 3), 1);
  assertEquals(mathUtil.saturate(3, 1, 3), 3);
})