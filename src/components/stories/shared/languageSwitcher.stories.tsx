import type { Meta, StoryObj } from "@storybook/react";

import { LanguageSwitcher } from "@components/shared/languageSwitcher";

const meta: Meta<typeof LanguageSwitcher> = {
  component: LanguageSwitcher,
  title: "shared/LanguageSwitcherToggle",
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const DefaultEnglish: Story = {
  render: (args) => <LanguageSwitcher {...args} />,
  args: {
    lng: "en",
  },
};

export const Nepali: Story = {
  render: (args) => <LanguageSwitcher {...args} />,
  args: {
    lng: "np",
  },
};

export const Hindi: Story = {
  render: (args) => <LanguageSwitcher {...args} />,
  args: {
    lng: "hi",
  },
};
