import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"clients"} />
		<Helmet>
			<title>
				Quarkly export
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
                    href="/doctor"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                >Home</Link>
                <Link
                    href="/myclients"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >My clients</Link>
                <Link
                    href="/review"
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >Add review</Link>
                
                <Link
                    display="flex"
                    justify-content="center"
                    font="--base"
                    font-weight="700"
                    md-flex-direction="column"
                    md-align-items="center"
                    slot="link-active" text-decoration="none" color="--dark" padding="6px 2px 6px 2px"
                    
                >Logout</Link>
			</Box>
		</Section>
		<Section padding="88px 0 88px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0">
			<Override slot="SectionContent" max-width="1220px" />
			<Box margin="0px 0px 100px 0px" padding="15px 15px 15px 15px" md-margin="0px 0px 40px 0px" lg-margin="0px 0px 56px 0px">
				<Text
					margin="0px 0px 24px 0px"
					font="--headline1"
					color="--dark"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Schedule of workshop program
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2" text-align="center">
					June, 14{" "}
				</Text>
			</Box>
			<Box
				display="flex"
				margin="0px 0px 49px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Box
					width="30%"
					padding="48px 15px 15px 15px"
					align-items="flex-start"
					display="flex"
					justify-content="center"
					border-style="solid"
					border-width="2px 0px 0px 0px"
					border-color="--color-lightD2"
					margin="0px 10% 0px 0px"
					lg-margin="0px 30px 0px 0px"
					md-width="100%"
					sm-padding="24px 15px 15px 15px"
					md-justify-content="flex-start"
					md-margin="0px 0px 0px 0px"
					sm-justify-content="center"
				>
					<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2">
						08:00 — 09:00
					</Text>
				</Box>
				<Box
					width="70%"
					padding="48px 15px 15px 15px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					border-style="solid"
					border-width="2px 0px 0px 0px"
					border-color="--color-lightD2"
					md-width="100%"
					md-border-width="0px"
					sm-align-items="center"
					sm-flex-direction="column"
					sm-justify-content="center"
					sm-padding="25px 15px 15px 15px"
					md-padding="33px 15px 15px 15px"
				>
					<Image
						width="217px"
						height="217px"
						margin="0px 64px 0px 0px"
						src="https://images.unsplash.com/photo-1554651802-57f1d69a4944?auto=format&fit=crop&w=400&q=80"
						object-fit="cover"
						border-radius="100%"
						lg-width="124px"
						lg-height="124px"
						lg-margin="0px 24px 0px 0px"
						sm-margin="0px 0px 24px 0px"
					/>
					<Box
						padding="0px 0px 0px 0px"
						width="50%"
						lg-width="70%"
						sm-width="100%"
						sm-align-items="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-justify-content="center"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Sam Smith
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2" sm-text-align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				margin="0px 0px 49px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Box
					width="30%"
					padding="48px 15px 15px 15px"
					align-items="flex-start"
					display="flex"
					justify-content="center"
					border-style="solid"
					border-width="2px 0px 0px 0px"
					border-color="--color-lightD2"
					margin="0px 10% 0px 0px"
					lg-margin="0px 30px 0px 0px"
					md-width="100%"
					sm-padding="24px 15px 15px 15px"
					md-justify-content="flex-start"
					md-margin="0px 0px 0px 0px"
					sm-justify-content="center"
				>
					<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2">
						09:00 — 10:00
					</Text>
				</Box>
				<Box
					width="70%"
					padding="48px 15px 15px 15px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					border-style="solid"
					border-width="2px 0px 0px 0px"
					border-color="--color-lightD2"
					md-width="100%"
					md-border-width="0px"
					sm-align-items="center"
					sm-flex-direction="column"
					sm-justify-content="center"
					sm-padding="25px 15px 15px 15px"
					md-padding="33px 15px 15px 15px"
				>
					<Image
						width="217px"
						height="217px"
						margin="0px 64px 0px 0px"
						src="https://images.unsplash.com/photo-1602480370486-ddc38af362cb?auto=format&fit=crop&w=400&q=80"
						object-fit="cover"
						border-radius="100%"
						lg-width="124px"
						lg-height="124px"
						lg-margin="0px 24px 0px 0px"
						sm-margin="0px 0px 24px 0px"
					/>
					<Box
						padding="0px 0px 0px 0px"
						width="50%"
						lg-width="70%"
						sm-width="100%"
						sm-align-items="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-justify-content="center"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Adriana Williams
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2" sm-text-align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				margin="0px 0px 49px 0px"
				md-flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Box
					width="30%"
					padding="48px 15px 15px 15px"
					align-items="flex-start"
					display="flex"
					justify-content="center"
					border-style="solid"
					border-width="2px 0px 0px 0px"
					border-color="--color-lightD2"
					margin="0px 10% 0px 0px"
					lg-margin="0px 30px 0px 0px"
					md-width="100%"
					sm-padding="24px 15px 15px 15px"
					md-justify-content="flex-start"
					md-margin="0px 0px 0px 0px"
					sm-justify-content="center"
				>
					<Text margin="0px 0px 0px 0px" font="--headline3" color="--darkL2">
						10:00 — 11:00
					</Text>
				</Box>
				<Box
					width="70%"
					padding="48px 15px 15px 15px"
					display="flex"
					align-items="flex-start"
					justify-content="flex-start"
					border-style="solid"
					border-width="2px 0px 0px 0px"
					border-color="--color-lightD2"
					md-width="100%"
					md-border-width="0px"
					sm-align-items="center"
					sm-flex-direction="column"
					sm-justify-content="center"
					sm-padding="25px 15px 15px 15px"
					md-padding="33px 15px 15px 15px"
				>
					<Image
						width="217px"
						height="217px"
						margin="0px 64px 0px 0px"
						src="https://images.unsplash.com/photo-1619950466709-02c2bf682442?auto=format&fit=crop&w=400&q=80"
						object-fit="cover"
						border-radius="100%"
						lg-width="124px"
						lg-height="124px"
						lg-margin="0px 24px 0px 0px"
						sm-margin="0px 0px 24px 0px"
					/>
					<Box
						padding="0px 0px 0px 0px"
						width="50%"
						lg-width="70%"
						sm-width="100%"
						sm-align-items="center"
						sm-display="flex"
						sm-flex-direction="column"
						sm-justify-content="center"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--dark">
							Ethan Tremblay
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2" sm-text-align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
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
			<style place={"endOfHead"} rawKey={"62e38af0f913c500201c13a2"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});