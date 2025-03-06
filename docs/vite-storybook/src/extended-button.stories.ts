import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ExtendedButton } from "./extended-button";

const meta = {
  title: 'Not Working/Extending the Button Interface',
  component: ExtendedButton,  
  tags: ['autodocs'],    
  args: { onClick: fn() },
} satisfies Meta<typeof ExtendedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {    
    label: 'LocalButton',
    title: "Title goes here"
  },
};
