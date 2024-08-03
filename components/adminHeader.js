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
import { Flex, FlexItem, Slot, SlotFillProvider } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { PluginArea } from "@wordpress/plugins";

/**
 * Admin Header
 */
function AdminHeader({ pageName, pageIcon, SupportEmail }) {
    return (
        <SlotFillProvider>
            <PluginArea scope="dashboard-header-slots-plugin" />

            <div className="polaris-dashboard-header">
                <Slot name="DashboardHeaderSlotBeforeTitle" />

                <Flex className="built-wrap">
                    <FlexItem className="polaris-dashboard-header__title">
                        {/* <span className="sub-title"> { setHubName ? HubName : 'Site Hub' } </span> */}
                        <div className="icon">{pageIcon}</div>
                        <h1 className="title">
                            {__(`${pageName}`, "built-admin")}
                        </h1>
                    </FlexItem>

                    <Slot name="DashboardHeaderSlotAfterTitle" />
                </Flex>
            </div>
        </SlotFillProvider>
    );
}

// Export Component
export { AdminHeader };
