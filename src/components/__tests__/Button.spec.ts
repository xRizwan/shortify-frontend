import { describe, it, expect, vi, beforeAll, Mock } from "vitest";

import { shallowMount, VueWrapper } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", async () => {
  let wrapper: VueWrapper<any>;
  let fn: Mock;
  beforeAll(() => {
    fn = vi.fn();
    wrapper = shallowMount(Button, {
      props: { text: "This is a button!", "onOn-click": fn },
    });
  });

  it("renders properly", () => {
    expect(wrapper.text()).toContain("This is a button!");
  });

  it("triggers function on click", async () => {
    await wrapper.trigger("click");
    await wrapper.trigger("click");

    expect(fn).toBeCalledTimes(2);
  });
});
