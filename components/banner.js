import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	Button,
	Stack,
} from "@chakra-ui/react";

const Banner = () => {
	return (
		<Box
			height={["600px", null, "650px"]}
			backgroundImage={`url(/main-banner.png)`}
			backgroundPosition="center"
			backgroundSize="cover"
			width="100%"
		>
			<Flex boxSize="100%" background="rgba(0, 0, 0, 0.3)">
				<Container maxW="container.xl" height="100%">
					<Stack
						justifyContent="center"
						alignItems="start"
						textAlign="start"
						color="white"
						height="100%"
						spacing="10"
					>
						<Heading mb="4" maxW="650px" lineHeight="tall" size="lg">
							<Text as="span" color="#FF7A00">
								OGOGO GROUP{" "}
							</Text>
							- cоздаем продукты для улучшения жизни людей, процветания
							страны и развитие стартап экосистемы
						</Heading>
						<Button
							size="lg"
							color="white"
							bg="#FF7A00"
							_hover={{
								bg: "#bd5f09",
							}}
							_active={{
								bg: "#bd5f09",
							}}
						>
							Все проекты
						</Button>
					</Stack>
				</Container>
			</Flex>
		</Box>
	);
};

export default Banner;