import {
	Card,
	CardBody,
	CardHeader,
	TextControl,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

function IntegrationCard({
	name,
	slug,
	image,
	description,
	link,
	inputLabel,
	integrationsSettings,
	setIntegrations,
}) {
	const enabled = integrationsSettings[slug]?.enabled ?? false;
	const key = integrationsSettings[slug]?.key ?? "";

	return (
		<Card className={`integration integration--${slug}`}>
			<CardHeader>
				<div className="integration__header-content">
					{image && (
						<img
							className="integration__logo"
							src={image}
							alt={name}
						/>
					)}
					<h2 className="integration__name">{name}</h2>
				</div>
				<ToggleControl
					className="toggle-control toggle-control--hidden-label"
					checked={enabled}
					label={__("Enable Integration", "built-admin")}
					onChange={(newValue) => {
						setIntegrations({
							...integrationsSettings,
							[slug]: {
								...integrationsSettings[slug],
								enabled: newValue,
							},
						});
					}}
				/>
			</CardHeader>
			<CardBody className="integration__description">
				{link ? (
					<a target="_blank" rel="noopener noreferrer" href={link}>
						{name}
					</a>
				) : (
					name
				)}
				{description}
			</CardBody>
			{enabled && (
				<CardBody>
					<TextControl
						label={inputLabel}
						value={key}
						onChange={(newValue) => {
							setIntegrations({
								...integrationsSettings,
								[slug]: {
									...integrationsSettings[slug],
									key: newValue,
								},
							});
						}}
					/>
				</CardBody>
			)}
		</Card>
	);
}

export { IntegrationCard };
