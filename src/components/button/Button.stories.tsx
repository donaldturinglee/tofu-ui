import type { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: { language: "tsx" },
      canvas: { sourceState: "shown" }
    }
  }
} as Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Variants</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button variant="primary" size="medium" radius="sm">Primary</Button>
        <Button variant="solid" size="medium" radius="sm">Solid</Button>
        <Button variant="soft" size="medium" radius="sm">Soft</Button>
        <Button variant="surface" size="medium" radius="sm">Surface</Button>
        <Button variant="outline" size="medium" radius="sm">Outline</Button>
        <Button variant="ghost" size="medium" radius="sm">Ghost</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Intents</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button intent="success" variant="solid" size="medium" radius="sm">Success</Button>
        <Button intent="warning" variant="solid" size="medium" radius="sm">Warning</Button>
        <Button intent="danger" variant="solid" size="medium" radius="sm">Danger</Button>
        <Button intent="info" variant="solid" size="medium" radius="sm">Info</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Sizes</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button size="small" variant="solid" radius="sm">Small</Button>
        <Button size="medium" variant="solid" radius="sm">Medium</Button>
        <Button size="large" variant="solid" radius="sm">Large</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Disabled</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="outline" size="medium" radius="sm" disabled>Disabled</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Loading</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="soft" size="medium" radius="sm" isLoading>Loading</Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Radius</h3>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button variant="solid" size="medium" radius="xs">Radius xs</Button>
        <Button variant="solid" size="medium" radius="sm">Radius sm</Button>
        <Button variant="solid" size="medium" radius="md">Radius md</Button>
        <Button variant="solid" size="medium" radius="xl">Radius xl</Button>
        <Button variant="solid" size="medium" radius="full">Radius full</Button>
      </div>
    </div>
  </div>
);

export const Playground: StoryFn<typeof Button> = (args) => <Button {...args} />;
Playground.parameters = {
  docs: {
    source: {
      type: "code",
      code: "<Button {...args} />",
      language: "tsx",
    },
  },
};

Playground.args = {
  children: <span>Button</span>,
  variant: "solid",
  intent: "info",
  size: "medium",
  radius: "sm",
  className: "w-100",
  disabled: false,
  isLoading: false,
  highContrast: false,
};

Playground.argTypes = {
  children: { control: { type: "text" } },
  variant: {
    control: { type: "select" },
    options: ["primary", "solid", "soft", "surface", "outline", "ghost"],
  },
  intent: {
    control: { type: "select" },
    options: ["success", "warning", "danger", "info"],
  },
  size: {
    control: { type: "select" },
    options: ["small", "medium", "large"],
  },
  radius: {
    control: { type: "select" },
    options: ["xs", "sm", "md", "xl", "full"],
  },
  highContrast: { control: { type: "boolean" } },
  disabled: { control: { type: "boolean" } },
  isLoading: { control: { type: "boolean" } },

};

Playground.parameters = {
  layout: "centered",
};