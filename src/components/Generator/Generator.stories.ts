import type { Meta, StoryObj } from '@storybook/react';

import { Generator } from './Generator';

const meta = {
    title: 'Components/Generator',
    component: Generator,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // parameters: {
    //     // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    //     layout: 'fullscreen',
    // },
    // args: {
    //     onLogin: fn(),
    //     onLogout: fn(),
    //     onCreateAccount: fn(),
    // },
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Generator: Story = {};
