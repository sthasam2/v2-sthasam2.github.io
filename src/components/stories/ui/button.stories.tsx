// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../ui/button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Default</Button>,
  args: {
    variant: "default",
  },
};

export const Ghost: Story = {
  render: (args) => <Button {...args}>Ghost</Button>,
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  render: (args) => <Button {...args}>Link</Button>,
  args: {
    variant: "link",
  },
};

export const Outline: Story = {
  render: (args) => <Button {...args}>Outline</Button>,
  args: {
    variant: "outline",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Secondary</Button>,
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  render: (args) => <Button {...args}>Destructive</Button>,
  args: {
    variant: "destructive",
  },
};
