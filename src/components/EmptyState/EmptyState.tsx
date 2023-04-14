import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface EmptyStateProps {
  text: string;
  Icon: React.ReactNode;
}

export function EmptyState({ text, Icon }: EmptyStateProps) {
  const theme = useTheme();
  return (
    <Box p={4} justifyContent={"center"} textAlign={"center"}>
      {Icon}
      <Typography mt={1} color={theme.palette.text.secondary}>
        {text}
      </Typography>
    </Box>
  );
}