import React from "react";
import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemeProvider {...props}>
      <div>{children}</div>
    </NextThemeProvider>
  );
};

export default ThemeProvider;
