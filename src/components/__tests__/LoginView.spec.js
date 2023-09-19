import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LoginView from "../../views/LoginView.vue";
import Vuex from "vuex";
import store from "../../store";

describe("LoginView.vue", () => {
  it("renders logo correctly", () => {
    const wrapper = shallowMount(LoginView, {
      props: {
        isAuthenticated: true,
      },
      global: {
        plugins: [Vuex],
        mocks: {
          $store: store,
        },
        stubs: ["router-link"],
      },
    });
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes().src).toBe("/imgs/Logo_texto.png");
    expect(img.attributes().alt).toBe("Logo Huellitas");
  });
});
