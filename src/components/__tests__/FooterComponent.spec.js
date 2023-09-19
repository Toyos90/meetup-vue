import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";
import FooterComponent from "../../components/FooterComponent.vue";

describe("HomeView", () => {
  it("renders FooterComponent", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true);
  });
});
