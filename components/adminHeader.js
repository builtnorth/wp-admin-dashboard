/**
 * ------------------------------------------------------------------
 * Admin Header
 * ------------------------------------------------------------------
 *
 * This component is used to render the admin header.
 */

// React Dependenices
import React from "react";

// WordPress Dependencies
import {
    Button,
    Flex,
    FlexItem,
    Slot,
    SlotFillProvider,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { PluginArea } from "@wordpress/plugins";

import { IconRenderer } from "./IconRenderer";

/**
 * Admin Header
 */
function AdminHeader({ pageName, pageIcon, SupportEmail }) {
    return (
        <SlotFillProvider>
            <PluginArea scope="dashboard-header-slots-plugin" />

            <div className="polaris-dashboard-header">
                <Slot name="DashboardHeaderSlotBeforeTitle" />

                <Flex className="polaris-wrap">
                    <FlexItem className="polaris-dashboard-header__title">
                        {polaris_localize.whitelabel_logo ? (
                            <img
                                className="polaris-dashboard-header__logo"
                                src={polaris_localize.whitelabel_logo}
                                alt={
                                    polaris_localize.whitelabel_name ||
                                    "Company Logo"
                                }
                            />
                        ) : (
                            <div className="icon">{pageIcon}</div>
                        )}
                        <h1 className="title">
                            {__(`${pageName}`, "polaris-admin")}
                        </h1>
                    </FlexItem>
                    <FlexItem className="polaris-dashboard-header__right">
                        {polaris_dashboard_localize.header_icons &&
                            Object.entries(
                                polaris_dashboard_localize.header_icons,
                            ).map(([key, icon]) => (
                                <Button
                                    key={key}
                                    className="button-icon"
                                    variant="tertiary"
                                    size="compact"
                                    icon={<IconRenderer iconName={icon.icon} />}
                                    label={icon.label}
                                    href={icon.url}
                                    target={icon.external ? "_blank" : "_self"}
                                    rel={
                                        icon.external
                                            ? "noopener noreferrer"
                                            : ""
                                    }
                                />
                            ))}
                    </FlexItem>

                    <Slot name="DashboardHeaderSlotAfterTitle" />
                </Flex>
            </div>
        </SlotFillProvider>
    );
}

// Export Component
export { AdminHeader };
