import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Elements from "./SideBarComponents/Elements";
import Pages from "./SideBarComponents/Pages";

const SideNav = () => {
  return (
    <>
      <Tabs defaultValue="elements">
        <TabsList className="w-full cursor-pointer">
          <TabsTrigger value="elements">Elements</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
        </TabsList>
        <TabsContent value="elements">
          <Elements />
        </TabsContent>
        <TabsContent value="pages">
          <Pages />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SideNav;
