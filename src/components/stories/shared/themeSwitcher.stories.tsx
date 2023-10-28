import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "@components/shared/themeSwitcher";
import { ThemeProvider } from "@components/theme-provider";

const meta: Meta<typeof ThemeSwitcher> = {
  component: ThemeSwitcher,
  title: "shared/ThemeSwitcherToggle",
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const DefaultSystem: Story = {
  render: (args) => (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeSwitcher />
    </ThemeProvider>
  ),
};
