import { Box } from "@chakra-ui/react";

export default function HR(props: any) {
  return (
    <Box
      height="1px"
      width="100%"
      backgroundColor="rgba(89, 89, 89, .2)"
      alignSelf="center"
      {...props}
    />
  );
}
