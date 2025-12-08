import type { StoryFn } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button/Features",
};

export const Basic: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Button>Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const LoadingOverlay: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Button variant="solid" isLoading>Loading</Button>
    <Button variant="soft" isLoading>Loading</Button>
  </div>
);

export const AsChildLink: StoryFn<typeof Button> = () => (
  <Button variant="solid">
    <a href="#" onClick={(e) => e.preventDefault()}>Link Button</a>
  </Button>
);