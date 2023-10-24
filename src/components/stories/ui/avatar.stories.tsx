import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "ui/Avatar",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;
type AvatarImageStory = StoryObj<typeof AvatarImage>;
type AvatarFallbackStory = StoryObj<typeof AvatarFallback>;

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    children: "SS",
  },
};

export const AvatartWithImage: AvatarImageStory = {
  render: (args) => (
    <Avatar>
      <AvatarImage {...args} />
    </Avatar>
  ),
  args: {
    src: "https://avatars.githubusercontent.com/u/51694759?v=4",
    width: 50,
    height: 50,
    alt: "SS",
  },
};

export const AvatarWithFallback: AvatarFallbackStory = {
  render: (args) => (
    <Avatar>
      <AvatarFallback {...args} />
    </Avatar>
  ),
  args: {
    children: "SS",
  },
};
