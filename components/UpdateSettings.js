import classnames from "classnames";

// WordPress Dependencies
import { Animate, Button } from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { dispatch, useDispatch } from "@wordpress/data";
import { Fragment, useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/**
 * Renders the update settings buttons and animation
 *
 * @since 2.1.0
 * @param {Object} props All the props passed to this function
 */
function UpdateSettings(props) {
    const [status, setStatus] = useState("saved");
    const { restEndPoint, settings, setSettings, hasUpdates, setHasUpdates } =
        props;
    const { saveEntityRecord } = useDispatch(coreStore);

    const updateButton =
        status === "saving"
            ? __("Saving…", "polaris")
            : __("Save Settings", "polaris");

    // Handle all setting changes, and save to the database.
    async function onSettingsChange() {
        if (!hasUpdates) {
            setStatus("no-changes");
            return;
        }

        setStatus("saving");

        try {
            const response = await saveEntityRecord(
                "polaris/v1",
                restEndPoint,
                settings,
            );

            if (response) {
                setSettings(response);
                setStatus("saved");
                setHasUpdates(false);

                // Snackbar notification
                dispatch("core/notices").createNotice(
                    "success",
                    __("Settings Updated", "polaris"),
                    {
                        type: "snackbar",
                        isDismissible: true,
                    },
                );
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error saving settings:", error);
            setStatus("error");
        }
    }

    useEffect(() => {
        console.log("HasUpdates changed:", hasUpdates);
    }, [hasUpdates]);

    return (
        <Fragment>
            <div className="built-save-button">
                {status === "saving" && (
                    <Animate type="loading">
                        {({ className: animateClassName }) => (
                            <span
                                className={classnames(
                                    "message",
                                    animateClassName,
                                )}
                            >
                                {__("Saving...", "polaris")}
                            </span>
                        )}
                    </Animate>
                )}
                {status === "error" && (
                    <span className="message update-failed">
                        {__("Update failed. Please try again.", "polaris")}
                    </span>
                )}
                {status === "no-changes" && (
                    <span className="message no-changes">
                        {__("No changes to save.", "polaris")}
                    </span>
                )}

                <Button
                    className={classnames("button", {
                        "is-busy": status === "saving",
                    })}
                    onClick={onSettingsChange}
                    disabled={!hasUpdates && status !== "error"}
                    variant="primary"
                >
                    {updateButton}
                </Button>
            </div>
        </Fragment>
    );
}

// Export Component
export { UpdateSettings };
