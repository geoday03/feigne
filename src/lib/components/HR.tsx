import { Box } from "@chakra-ui/react";

export default function HR(props: any) {
  return (
    <Box
      height="1px"
      width="105%"
      backgroundColor="rgba(89, 89, 89, .2)"
      alignSelf="center"
      mb=".5rem"
      my="20px"
      {...props}
    />
  );
}
