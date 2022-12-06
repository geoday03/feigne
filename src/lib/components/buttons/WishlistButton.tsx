import { IconButton } from "@chakra-ui/react";
import HeartIcon from "lib/Icons/HeartIcon";

export default function WishlistButton(props: any) {
  return (
    <IconButton
      icon={<HeartIcon boxSize="20px" />}
      aria-label="Wishlist"
      {...props}
    />
  );
}
