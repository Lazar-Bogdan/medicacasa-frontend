import React from "react";
import theme from "theme";
import { Theme, Link,Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
		<Helmet>
			<title>
				About
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Doctors For You
				</Text>
				<Link
                    href="/"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Home</Link>
                <Link
                    href="/aboutus"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >About us</Link>
				<Link
                    href="/alldoctors"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Doctors</Link>
                <Link
                    href="/contactus"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Contact us</Link>
                <Link
					href="/login"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >Login</Link>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Aici text despre cine suntem noi si ce facem
			</Text>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline1" color="--dark" text-align="center">
					Our Team
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					echipa noastra, ar fii fain sa luam din baza de date poate? Sa fie cei care sunt administratori sau ceva de genu
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1554651802-57f1d69a4944?auto=format&fit=crop&w=500&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Sam Smith
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1599870418764-c38abcfb955a?auto=format&fit=crop&w=400&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Mason Johnson
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1602480370486-ddc38af362cb?auto=format&fit=crop&w=500&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Adriana Williams
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 24px 0px 24px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://images.unsplash.com/photo-1619950466709-02c2bf682442?auto=format&fit=crop&w=300&q=80"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Ethan Tremblay
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/bogdi.lazar.5/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--light"
					margin="0 8px"
					background="--color-grey"
					hover-background="--color-greyD1"
				/>
			</SocialMedia>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"62de926f5e5c6e002154effc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});