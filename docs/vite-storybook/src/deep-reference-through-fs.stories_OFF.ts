import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../../../packages/ui/src/button.tsx';

const meta = {
  title: 'Working/Import using direct fs path',
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
