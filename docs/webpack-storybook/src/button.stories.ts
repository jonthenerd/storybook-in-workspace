import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@jonthenerd/ui';

const meta = {
  title: 'Not Working/Importing the button into the story directly',
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
