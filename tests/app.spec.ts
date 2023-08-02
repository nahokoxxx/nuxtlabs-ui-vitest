import { expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../app.vue";

it("shows title", () => {
  const wrapper = mount(App);
  expect(wrapper.text()).toContain("nuxtlabs-ui-vitest");
});
