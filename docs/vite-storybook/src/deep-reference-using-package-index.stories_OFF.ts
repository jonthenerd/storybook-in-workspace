import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@jonthenerd/ui/src/index.ts';

const meta = {
  title: 'Working/Import using package index',
  component: Button,  
  tags: ['autodocs'],    
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {    
    label: 'Button',
  },
};
