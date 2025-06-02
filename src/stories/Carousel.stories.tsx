import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../Carousel";
import slides from "../slides";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Example/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    slides,
  },
  render: function RenderCarousel(args) {
    const [, updateArgs] = useArgs();

    return (
      <Carousel
        {...args}
        onSlideIndexChange={(newSlideIndex) => {
          // Update the slideIndex arg.
          updateArgs({ slideIndex: newSlideIndex });
          // Invoke the Actions addon handler.
          args.onSlideIndexChange?.(newSlideIndex);
        }}
      />
    );
  },
};
