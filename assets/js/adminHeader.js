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

/** Import Components */
import { __ } from '@wordpress/i18n';
import { PluginArea } from '@wordpress/plugins';
import { SlotFillProvider, Slot, Fill, Flex, FlexItem} from '@wordpress/components';
import { Icon, commentContent } from '@wordpress/icons';


/** Build Components */

function AdminHeader({
    pageName,
    pageIcon,
    SupportEmail
}) 
{




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
                        {SupportEmail}
                    </FlexItem>
                    {/* {SupportEmail &&  */}
                        <FlexItem className="built-dashboard-header__right">
                           <a href="#" className="icon-wrap" aria-label="contact support"><Icon icon={commentContent} /></a>
                        </FlexItem>
                    {/* } */}

                    <Slot name="DashboardHeaderSlotAfterTitle" />
                    
                </Flex>
            </div>

        </SlotFillProvider>

    )

}

// Export Component
export default AdminHeader;