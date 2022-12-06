import { IconButton, useColorModeValue } from "@chakra-ui/react";
import HeartIcon from "lib/Icons/HeartIcon";

export default function WishlistButton(props: any) {
  return (
    <IconButton
      icon={<HeartIcon boxSize="20px" />}
      aria-label="Wishlist"
      variant="ghost"
      colorScheme={useColorModeValue("blackAlpha", "gray")}
      fill={useColorModeValue("text.light", "text.dark")}
      {...props}
    />
  );
}
