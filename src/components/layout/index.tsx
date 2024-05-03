import { ThemedHeaderV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren) => {
   return (
      <ThemedHeaderV2
         Header={Header}
         Title={(titleProps: any) => <ThemedTitleV2 {...titleProps} text="Refine" />}
      >
         {children}
      </ThemedHeaderV2>
   )
}

export default Layout
