import {
	Box,
	Flex,
	Text,
	Stack,
	Icon,
	Container,
	Image,
	Link,
	Divider,
	Grid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
	RiInstagramLine,
	RiFacebookCircleLine,
	RiTwitterLine,
	RiTelegramLine,
} from "react-icons/ri";
import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
	const { t } = useTranslation("common");

	return (
		<Box bg="#2E2E2E">
			<Container maxW="container.xl">
				<Grid
					templateColumns={["1fr", null, "auto 1fr"]}
					py={["50px", null, "80px"]}
					color="white"
					gap="10"
				>
					<Flex alignItems="center" mt="2">
						<Image
							src="/logo-g.svg"
							width={["35px", null, "40px"]}
							mr="4"
						/>
						<Text as="span" color="#FF7A00" fontFamily="Gilroy">
							{"OGOGO GROUP"}
						</Text>
					</Flex>
					<Stack divider={<Divider />} spacing="6">
						<Flex flexDirection="column" flex="1">
							<Flex
								flexDirection={["column", null, "row"]}
								justifyContent="space-between"
								alignItems={["start", null, "center"]}
							>
								<Stack
									spacing={[4, null, 10]}
									direction={["column", null, "row"]}
									mb={[10, null, 0]}
								>
									<Link href="/academy">{t("pages.academy")}</Link>
									<Link href="/soft">{t("pages.soft")}</Link>
									<Link href="/demaloo">{t("pages.demaloo")}</Link>
								</Stack>
								<Stack spacing="6" direction="row">
									<Link
										href="https://www.instagram.com/ogogo_academy"
										isExternal
									>
										<Icon as={RiInstagramLine} boxSize="25px" />
									</Link>
									<Icon as={RiFacebookCircleLine} boxSize="25px" />
									<Icon as={RiTelegramLine} boxSize="25px" />
									<Icon as={RiTwitterLine} boxSize="25px" />
								</Stack>
							</Flex>
						</Flex>
						<Flex
							flexDirection={["column-reverse", null, null, "row"]}
							justifyContent="space-between"
						>
							<Text as="span" fontSize="sm" mt={[6, null, null, 0]}>
								© 2021{` ${t("footer.rights")}`}
							</Text>
							<Stack direction={["column", null, "row"]} spacing="6">
								<Flex alignItems="center">
									<Icon as={MdOutlineLocationOn} mr="3" />
									<Text as="span" fontSize="sm">
										{t("footer.street")}
									</Text>
								</Flex>
								<Flex alignItems="center">
									<Icon as={MdOutlineEmail} mr="3" />
									<Text as="span" fontSize="sm">
										admin@ogogo.kg
									</Text>
								</Flex>
								<Flex alignItems="center">
									<Icon as={MdPhone} mr="3" />
									<Text as="span" fontSize="sm">
										+996 (550) 312-312
									</Text>
								</Flex>
							</Stack>
						</Flex>
					</Stack>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
