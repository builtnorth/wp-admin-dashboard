/**
 * ------------------------------------------------------------------
 * Admin Component: Admin Header
 * ------------------------------------------------------------------
 * 
 * Adds a spiiner until page has loaded.
 * Does not currently fully work.
 * 
 * References:
 * @link https://stackoverflow.com/questions/57729504/is-there-a-way-to-tell-when-your-react-app-page-is-done-loading-the-page-asset
 * 
 */

import React from 'react';

/** Import Components */
import { Flex, FlexItem, Slot, SlotFillProvider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PluginArea } from '@wordpress/plugins';

/** Build Components */

export const AdminHeader = ({ pageName, pageIcon, SupportEmail }) => {




    return (

        <SlotFillProvider>
            <PluginArea scope="dashboard-header-slots-plugin" />
      
            <div className="built-dashboard-header">

                <Slot name="DashboardHeaderSlotBeforeTitle" />

                <Flex className="built-wrap">
                    <FlexItem className="built-dashboard-header__title">
                        {/* <span className="sub-title"> { setHubName ? HubName : 'Site Hub' } </span> */}
                        <div className="icon">{pageIcon}</div>
                        <h1 className="title">{ __( `${pageName}`, 'built-admin' ) }</h1>
                    </FlexItem>

                    <Slot name="DashboardHeaderSlotAfterTitle" />
                    
                </Flex>
            </div>

        </SlotFillProvider>

    )

}

