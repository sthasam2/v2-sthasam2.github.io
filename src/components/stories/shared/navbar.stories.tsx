import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "@components/shared/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "shared/Navbar",
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider>
      <Navbar {...args} />
    </ThemeProvider>
  ),
  args: {
    lng: "en",
  },
};
