import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";

const meta: Meta = {
  component: Card,
  title: "ui/Card",
  argTypes: {},
};

export default meta;

type CardStory = StoryObj<typeof Card>;

export const Default: CardStory = {
  render: (args) => <Card {...args} />,
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </>
    ),
  },
};
