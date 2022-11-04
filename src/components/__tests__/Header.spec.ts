import { describe, it, expect, vi, beforeAll, Mock } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";
import VueRouter from "vue-router";

import { shallowMount, VueWrapper } from "@vue/test-utils";
import Header from "../Header.vue";
import type { Store } from "pinia";

describe("Header", async () => {
  let wrapper: VueWrapper<any>;
  let user: Store;

  beforeAll(() => {
    wrapper = shallowMount(Header, {
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
