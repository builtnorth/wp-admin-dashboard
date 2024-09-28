import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FlexBlock,
} from "@wordpress/components";
import React, { useMemo } from "react";
import { IconRenderer } from "./IconRenderer";

const DashboardPanels = ({ dashboardPanels }) => {
    const sortedPanels = useMemo(() => {
        if (!dashboardPanels) return [];

        return Object.entries(dashboardPanels).sort(([, a], [, b]) => {
            const orderA = a.order || Number.MAX_SAFE_INTEGER;
            const orderB = b.order || Number.MAX_SAFE_INTEGER;
            return orderA - orderB;
        });
    }, [dashboardPanels]);

    const renderButton = (button, variant = "secondary") => {
        if (!button || !button.text) return null;

        const isAdminUrl = !!button.admin_url;
        const url = isAdminUrl
            ? `${polaris_localize.admin_url}${button.admin_url}`
            : button.url;

        return (
            <Button
                href={url}
                variant={variant}
                size="compact"
                className="polaris-dashboard-block__button"
                target={isAdminUrl ? "_self" : "_blank"}
                rel={isAdminUrl ? "" : "noopener noreferrer"}
            >
                {button.text}
            </Button>
        );
    };

    return (
        <>
            {sortedPanels.map(([key, panel]) => (
                <FlexBlock
                    key={key}
                    className={`polaris-dashboard-flex polaris-dashboard-flex--${key}`}
                >
                    <Card
                        className={`polaris-dashboard-block polaris-dashboard-block--${key}`}
                    >
                        <CardHeader>
                            <h2 className="polaris-dashboard-block__title">
                                {panel.heading}
                            </h2>
                            {panel.icon && (
                                <IconRenderer
                                    iconName={panel.icon}
                                    className="polaris-dashboard-block__icon"
                                />
                            )}
                        </CardHeader>
                        <CardBody className="polaris-dashboard-block__description">
                            {panel.content}
                        </CardBody>
                        {(panel.button_primary || panel.button_secondary) && (
                            <CardBody className="polaris-dashboard-block__actions">
                                {renderButton(
                                    panel.button_primary,
                                    "secondary",
                                )}
                                {renderButton(
                                    panel.button_secondary,
                                    "tertiary",
                                )}
                            </CardBody>
                        )}
                    </Card>
                </FlexBlock>
            ))}
        </>
    );
};

export { DashboardPanels };
