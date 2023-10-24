import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "ui/Badge",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => <Badge {...args} />,
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  render: (args) => <Badge {...args} />,
  args: {
    children: "Badge",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  render: (args) => <Badge {...args} />,
  args: {
    children: "Badge",
    variant: "destructive",
  },
};

export const Outline: Story = {
  render: (args) => <Badge {...args} />,
  args: {
    children: "Badge",
    variant: "outline",
  },
};
