import {
    Card,
    CardBody,
    CardHeader,
    TextControl,
    ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React, { useMemo } from "react";

const IntegrationPanels = ({
    integrationPanels,
    integrationsSettings,
    setIntegrations,
}) => {
    const sortedPanels = useMemo(() => {
        if (!integrationPanels) return [];

        return Object.entries(integrationPanels).sort(([, a], [, b]) => {
            const orderA = a.order || Number.MAX_SAFE_INTEGER;
            const orderB = b.order || Number.MAX_SAFE_INTEGER;
            return orderA - orderB;
        });
    }, [integrationPanels]);

    return (
        <>
            {sortedPanels.map(([key, panel]) => {
                const enabled = integrationsSettings[key]?.enabled ?? false;

                return (
                    <Card
                        key={key}
                        className={`integration integration--${key}`}
                    >
                        <CardHeader>
                            <div className="integration__header-content">
                                {panel.image && (
                                    <img
                                        className="integration__logo"
                                        src={panel.image}
                                        alt={panel.heading}
                                    />
                                )}
                                <h2 className="integration__name">
                                    {panel.heading}
                                </h2>
                            </div>
                            <ToggleControl
                                className="toggle-control  toggle-control--hidden-label"
                                checked={enabled}
                                label={__("Enable Integration", "built-admin")}
                                onChange={(newValue) => {
                                    setIntegrations({
                                        ...integrationsSettings,
                                        [key]: {
                                            ...integrationsSettings[key],
                                            enabled: newValue,
                                        },
                                    });
                                }}
                            />
                        </CardHeader>
                        <CardBody className="integration__description">
                            {panel.link ? (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={panel.link}
                                >
                                    {panel.heading}
                                </a>
                            ) : (
                                panel.heading
                            )}
                            &nbsp;{panel.content}
                        </CardBody>

                        {enabled && (
                            <CardBody>
                                <div className="polaris-integration-block__fields">
                                    {(() => {
                                        const fields = panel.fields || {};
                                        const fieldEntries = Array.isArray(
                                            fields,
                                        )
                                            ? fields
                                            : Object.entries(fields);

                                        return fieldEntries.map((field) => {
                                            const [name, data] = Array.isArray(
                                                field,
                                            )
                                                ? field
                                                : [field.name, field];
                                            return (
                                                <div
                                                    key={name}
                                                    className="polaris-integration-field"
                                                >
                                                    <TextControl
                                                        label={data.label}
                                                        type={data.type}
                                                        id={name}
                                                        name={name}
                                                        help={data.description}
                                                        value={
                                                            integrationsSettings[
                                                                key
                                                            ]?.[name] || ""
                                                        }
                                                        onChange={(
                                                            newValue,
                                                        ) => {
                                                            setIntegrations({
                                                                ...integrationsSettings,
                                                                [key]: {
                                                                    ...integrationsSettings[
                                                                        key
                                                                    ],
                                                                    [name]: newValue,
                                                                },
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </CardBody>
                        )}
                    </Card>
                );
            })}
        </>
    );
};

export { IntegrationPanels };
