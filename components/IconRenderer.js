/**
 * ------------------------------------------------------------------
 * Icon Renderer
 * ------------------------------------------------------------------
 *
 * Renders an icon from @wordpress/icons based on its name.
 */

// WordPress Dependencies
import * as allIcons from "@wordpress/icons";
import { Icon } from "@wordpress/icons";
import React from "react";

/**
 * Icon Renderer
 *
 * @param {Object} props - Component props
 * @param {string} props.iconName - Name of the icon to render
 * @param {string} [props.className=""] - Additional CSS class for the icon
 */
function IconRenderer({ iconName, className = "" }) {
    const getIcon = (name) => {
        if (typeof name === "string" && allIcons[name]) {
            return allIcons[name];
        }
        // Return a default icon or null if the icon doesn't exist
        return allIcons.globe || null;
    };

    const iconComponent = getIcon(iconName);

    if (!iconComponent) {
        return null;
    }

    return <Icon icon={iconComponent} className={className} />;
}

// Export Component
export { IconRenderer };
