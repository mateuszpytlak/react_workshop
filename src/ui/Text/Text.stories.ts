import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'UI/Text',
  component: Text,
//   tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary type Text'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary type Text',
  },
};