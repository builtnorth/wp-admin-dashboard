import {
    Card,
    CardBody,
    CardHeader,
    CheckboxControl,
    __experimentalInputControl as InputControl,
    RadioControl,
    SelectControl,
    TextControl,
    ToggleControl,
} from "@wordpress/components";
import { memo, useCallback } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const IntegrationCard = memo(
    ({ integration, integrationKey, updateIntegration }) => {
        const enabled = integration.enabled ?? false;

        const updateIntegrationSetting = useCallback(
            (fieldKey, value) => {
                updateIntegration(integrationKey, {
                    fields: {
                        ...integration.fields,
                        [fieldKey]: {
                            ...integration.fields[fieldKey],
                            value: value,
                        },
                    },
                });
            },
            [integrationKey, integration.fields, updateIntegration],
        );

        const renderField = useCallback(
            (field, key) => {
                const value = field.value ?? "";
                switch (field.type) {
                    case "radio":
                        return (
                            <RadioControl
                                label={field.label}
                                selected={value}
                                options={Object.entries(
                                    field.options || {},
                                ).map(([value, label]) => ({ value, label }))}
                                onChange={(newValue) =>
                                    updateIntegrationSetting(key, newValue)
                                }
                            />
                        );
                    case "checkbox":
                        return (
                            <CheckboxControl
                                label={field.label}
                                checked={value}
                                onChange={(newValue) =>
                                    updateIntegrationSetting(key, newValue)
                                }
                            />
                        );
                    case "select":
                        return (
                            <SelectControl
                                __nextHasNoMarginBottom={true}
                                __next40pxDefaultSize
                                label={field.label}
                                value={value}
                                options={Object.entries(
                                    field.options || {},
                                ).map(([value, label]) => ({ value, label }))}
                                onChange={(newValue) =>
                                    updateIntegrationSetting(key, newValue)
                                }
                            />
                        );
                    case "password":
                        return (
                            <InputControl
                                label={field.label}
                                type="password"
                                value={value}
                                onChange={(newValue) =>
                                    updateIntegrationSetting(key, newValue)
                                }
                            />
                        );
                    default: // 'text' or any other type
                        return (
                            <TextControl
                                label={field.label}
                                value={value}
                                onChange={(newValue) =>
                                    updateIntegrationSetting(key, newValue)
                                }
                            />
                        );
                }
            },
            [updateIntegrationSetting],
        );

        return (
            <Card className={`integration integration--${integrationKey}`}>
                <CardHeader>
                    <div className="integration__header-content">
                        {integration.image && (
                            <img
                                src={integration.image}
                                alt={integration.label}
                                className="integration__logo"
                            />
                        )}
                        <h2 className="integration__name">
                            {integration.label}
                        </h2>
                    </div>
                    <ToggleControl
                        className="toggle-control toggle-control--hidden-label"
                        checked={enabled}
                        label={__("Enable Integration", "polaris-integrations")}
                        onChange={(newValue) => {
                            updateIntegration(integrationKey, {
                                enabled: newValue,
                            });
                        }}
                    />
                </CardHeader>
                <CardBody className="integration__description">
                    <p>{integration.description}</p>
                </CardBody>
                {enabled && (
                    <CardBody className="integration__fields">
                        {integration.fields &&
                            Object.entries(integration.fields).map(
                                ([key, field]) => (
                                    <div key={key}>
                                        {renderField(field, key)}
                                    </div>
                                ),
                            )}
                    </CardBody>
                )}
            </Card>
        );
    },
);

export { IntegrationCard };
