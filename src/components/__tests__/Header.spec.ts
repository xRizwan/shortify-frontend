import { describe, it, expect, vi, beforeAll } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";
import VueRouter from "vue-router";

import { shallowMount, VueWrapper } from "@vue/test-utils";
import NavigationHeader from "../NavigationHeader.vue";
import type { Store } from "pinia";

describe("NavigationHeader", async () => {
  let wrapper: VueWrapper<any>;
  let user: Store;

  beforeAll(() => {
    wrapper = shallowMount(NavigationHeader, {
      global: {
        stubs: { "router-link": { template: "" } },
        plugins: [
          createTestingPinia({
            initialState: {
              username: "",
              token: "",
            },
            createSpy: vi.fn,
          }),
        ],
      },
    });
    user = useUserStore();
  });

  it("renders properly", () => {
    expect(wrapper.text()).toContain("Shorten urls!");
  });
});
