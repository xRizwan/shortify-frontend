import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button", () => {
  it("renders properly", () => {
    const wrapper = mount(Button, { props: { text: "This is a button!" } });
    expect(wrapper.text()).toContain("This is a button!");
  });
});
