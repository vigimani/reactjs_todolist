import { Flex, Divider} from "@chakra-ui/react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Layout({children, number, setNumber}) {
  return (
    <Flex direction="column">
      <Header number={number} setNumber={setNumber} />
      <Divider/>
        {children}
      <Footer />
    </Flex>
  );
}
