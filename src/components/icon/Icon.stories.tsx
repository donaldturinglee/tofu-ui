import type { StoryFn, Meta } from "@storybook/react";
import { AccessibilityIcon } from "./Icon";

export default {
    title: "Components/Icon",
    component: AccessibilityIcon,
} as Meta<typeof AccessibilityIcon>;

export const Default: StoryFn<typeof AccessibilityIcon> = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Sizes</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <AccessibilityIcon size={12} />
                <AccessibilityIcon size={16} />
                <AccessibilityIcon size={24} />
                <AccessibilityIcon size={32} />
                <AccessibilityIcon size={48} />
            </div>
        </div>
        <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Colors</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <AccessibilityIcon fill="currentColor" />
                <AccessibilityIcon fill="#0969da" />
                <AccessibilityIcon fill="#d1242f" />
                <AccessibilityIcon fill="#1a7f37" />
                <AccessibilityIcon fill="#9a6700" />
            </div>
        </div>
        <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>Vertical Align</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ fontSize: "16px", lineHeight: "1.5" }}>
                    baseline: Text with icon <AccessibilityIcon size={16} verticalAlign="baseline" /> inline
                </div>
                <div style={{ fontSize: "16px", lineHeight: "1.5" }}>
                    middle: Text with icon <AccessibilityIcon size={16} verticalAlign="middle" /> inline
                </div>
                <div style={{ fontSize: "16px", lineHeight: "1.5" }}>
                    text-bottom: Text with icon <AccessibilityIcon size={16} verticalAlign="text-bottom" /> inline
                </div>
                <div style={{ fontSize: "16px", lineHeight: "1.5" }}>
                    text-top: Text with icon <AccessibilityIcon size={16} verticalAlign="text-top" /> inline
                </div>
            </div>
        </div>
        <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>With Title (Tooltip)</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <AccessibilityIcon size={24} title="Accessibility Icon" />
                <span style={{ fontSize: "14px", color: "#666" }}>Hover over the icon to see the title</span>
            </div>
        </div>
        <div>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: 600 }}>With Aria Label (Accessible)</h3>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <AccessibilityIcon size={24} aria-label="Accessibility settings" />
                <span style={{ fontSize: "14px", color: "#666" }}>Icon with aria-label for screen readers (role="img")</span>
            </div>
        </div>
    </div>
);

export const Playground: StoryFn<typeof AccessibilityIcon> = (args) => <AccessibilityIcon {...args} />;

Playground.args = {
    size: 16,
    fill: "currentColor",
};

Playground.argTypes = {
    size: {
        control: {
            type: "number",
            min: 12,
            max: 64,
            step: 4,
        },
    },
    fill: {
        control: {
            type: "color",
        },
    },
    verticalAlign: {
        control: {
            type: "select",
        },
        options: ["baseline", "sub", "super", "text-top", "text-bottom", "middle", "top", "bottom"],
    },
    title: {
        control: {
            type: "text",
        },
    },
    "aria-label": {
        control: {
            type: "text",
        },
    },
};

Playground.parameters = {
    layout: "centered",
};
