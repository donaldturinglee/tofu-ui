import React, { useRef } from "react";
import type { StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { AddIcon, ArrowRightIcon } from "../icon";

export default {
  title: "Components/Button/Features",
};

export const Basic: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <Button shape="round">Default</Button>
    <Button variant="outline" shape="round">Outline</Button>
    <Button variant="ghost" shape="round">Ghost</Button>
  </div>
);

export const LoadingOverlay: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Button variant="solid" isLoading>Loading</Button>
    <Button variant="soft" isLoading>Loading</Button>
  </div>
);

export const Inactive: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Button variant="solid" shape="round" inactive>Inactive</Button>
    <Button variant="outline" shape="round" inactive>Inactive</Button>
    <Button variant="ghost" shape="round" inactive>Inactive</Button>
  </div>
);

export const RefFocus: StoryFn<typeof Button> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Button ref={buttonRef} variant="solid" shape="round">Ref Target</Button>
      <Button variant="outline" shape="round" onClick={() => buttonRef.current?.focus()}>
        Focus Target
      </Button>
    </div>
  );
};

export const Visuals: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
    <Button leadingVisual={<AddIcon size={16} />} variant="solid" shape="round">Create</Button>
    <Button trailingVisual={<ArrowRightIcon size={16} />} variant="outline" shape="round">Next</Button>
    <Button
      leadingVisual={<AddIcon size={16} />}
      trailingVisual={<ArrowRightIcon size={16} />}
      variant="soft"
      shape="round"
    >
      Both
    </Button>
    <Button
      leadingVisual={<AddIcon size={16} />}
      variant="solid"
      shape="round"
      isLoading
    >
      Loading
    </Button>
  </div>
);

export const Block: StoryFn<typeof Button> = () => (
  <div style={{ display: "grid", gap: "1rem", width: 320 }}>
    <Button block variant="solid" shape="round">Block Button</Button>
    <Button block variant="outline" shape="round" leadingVisual={<AddIcon size={16} />}>
      Block With Icon
    </Button>
  </div>
);

export const AsChildLink: StoryFn<typeof Button> = () => (
  <Button variant="solid" shape="round">
    <a href="#" onClick={(e) => e.preventDefault()}>Link Button</a>
  </Button>
);