import { createIcon, useColorMode } from "@chakra-ui/react";

export const MyLocationIcon = createIcon({
  displayName: "MyLocationIcon",
  path: (
    <path d="M22.5 45.9v-3.75q-6.85-.7-11.4-5.25-4.55-4.55-5.25-11.4H2.1v-3h3.75q.7-6.85 5.25-11.4 4.55-4.55 11.4-5.25V2.1h3v3.75q6.85.7 11.4 5.25 4.55 4.55 5.25 11.4h3.75v3h-3.75q-.7 6.85-5.25 11.4-4.55 4.55-11.4 5.25v3.75Zm1.5-6.7q6.25 0 10.725-4.475T39.2 24q0-6.25-4.475-10.725T24 8.8q-6.25 0-10.725 4.475T8.8 24q0 6.25 4.475 10.725T24 39.2Zm0-7.7q-3.15 0-5.325-2.175Q16.5 27.15 16.5 24q0-3.15 2.175-5.325Q20.85 16.5 24 16.5q3.15 0 5.325 2.175Q31.5 20.85 31.5 24q0 3.15-2.175 5.325Q27.15 31.5 24 31.5Z" />
  ),
});

export const LocationIcon = createIcon({
  displayName: "locationIcon",
  viewBox: "0 0 24 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 9.5c0 3.647-3.931 9.129-5.902 11.647a1.384 1.384 0 01-2.196 0C8.932 18.63 5 13.147 5 9.5a7 7 0 0114 0zm-4.002.105a3 3 0 11-5.996-.21 3 3 0 015.996.21z"
    />
  ),
});

export const AddLocationIcon = createIcon({
  displayName: "addLocationIcon",
  path: (
    <path d="M22.5 27.5h3v-6h6v-3h-6v-6h-3v6h-6v3h6ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Z" />
  ),
});
