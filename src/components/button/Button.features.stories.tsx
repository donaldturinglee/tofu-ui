import type { StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { AddIcon, ArrowRightIcon } from "../icon";

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

export const Visuals: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
    <Button leadingVisual={<AddIcon size={16} />} variant="solid">Create</Button>
    <Button trailingVisual={<ArrowRightIcon size={16} />} variant="outline">Next</Button>
    <Button
      leadingVisual={<AddIcon size={16} />}
      trailingVisual={<ArrowRightIcon size={16} />}
      variant="soft"
    >
      Both
    </Button>
    <Button
      leadingVisual={<AddIcon size={16} />}
      variant="solid"
      isLoading
    >
      Loading
    </Button>
  </div>
);

export const Block: StoryFn<typeof Button> = () => (
  <div style={{ display: "grid", gap: "1rem", width: 320 }}>
    <Button block variant="solid">Block Button</Button>
    <Button block variant="outline" leadingVisual={<AddIcon size={16} />}>
      Block With Icon
    </Button>
  </div>
);

export const AsChildLink: StoryFn<typeof Button> = () => (
  <Button variant="solid">
    <a href="#" onClick={(e) => e.preventDefault()}>Link Button</a>
  </Button>
);