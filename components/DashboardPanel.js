import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	FlexBlock,
	Icon,
	Slot,
} from "@wordpress/components";
import DOMPurify from "dompurify";
import { IconRenderer } from "./IconRenderer";

const DashboardPanel = ({ adminUrl, panel }) => {
	const getButtonUrl = (button) => {
		if (button.admin_url) {
			return `${adminUrl}${button.admin_url}`;
		}
		return button.url;
	};

	const renderIcon = (icon) => {
		if (typeof icon === "string") {
			// If icon is a string, assume it's a predefined icon name
			return (
				<IconRenderer
					className="polaris-dashboard-panel__icon"
					iconName={icon}
				/>
			);
		} else if (typeof icon === "object" && icon.svg) {
			// If icon is an object with an svg property, render custom SVG
			const sanitizedSvg = DOMPurify.sanitize(icon.svg, {
				USE_PROFILES: { svg: true },
			});
			const CustomIcon = () => (
				<span
					className="polaris-dashboard-panel__icon"
					dangerouslySetInnerHTML={{ __html: sanitizedSvg }}
				/>
			);

			return (
				<Icon
					icon={CustomIcon}
					className="polaris-dashboard-panel__icon"
				/>
			);
		}
		return null;
	};

	return (
		<FlexBlock
			className="polaris-dashboard-panel"
			style={{ width: panel.width || "25%" }}
		>
			<Card className="polaris-dashboard-panel__card">
				<CardHeader className="polaris-dashboard-panel__header">
					<h2>{panel.title}</h2>
					{panel.icon && renderIcon(panel.icon)}
				</CardHeader>
				<CardBody className="polaris-dashboard-panel__body">
					<p>{panel.description}</p>
					<Slot name={`DashboardPanelRenderSlot__${panel.id}`} />
				</CardBody>
				{panel.buttons && (
					<CardFooter className="polaris-dashboard-panel__footer">
						<div className="polaris-dashboard-panel__buttons">
							{panel.buttons.map(
								(
									button,

									index,
								) => (
									<Button
										key={index}
										href={getButtonUrl(button)}
										variant={button.variant || "secondary"}
										target={
											button.is_external_link
												? "_blank"
												: "_self"
										}
										rel={
											button.is_external_link
												? "noopener noreferrer"
												: ""
										}
									>
										{button.label}
									</Button>
								),
							)}
						</div>
					</CardFooter>
				)}
			</Card>
		</FlexBlock>
	);
};

export { DashboardPanel };
