import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { LocalButton } from './local-button';

const meta = {
  title: 'Working/Local component',
  component: LocalButton,  
  tags: ['autodocs'],    
  args: { onClick: fn() },
} satisfies Meta<typeof LocalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {    
    label: 'LocalButton'
  },
};
