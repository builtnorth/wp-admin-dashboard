/**
 * ------------------------------------------------------------------
 * Save Notices
 * ------------------------------------------------------------------
 *
 * Displays the notices on save.
 */

// WordPress Dependencies
import { SnackbarList } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { store as noticesStore } from "@wordpress/notices";

/**
 * Save Notices
 */
function SaveNotices() {
    const notices = useSelect(
        (select) =>
            select(noticesStore)
                .getNotices()
                .filter((notice) => notice.type === "snackbar"),
        [],
    );
    const { removeNotice } = useDispatch(noticesStore);
    return (
        <div className="polaris__notices">
            <SnackbarList
                className="edit-site-notices"
                notices={notices}
                onRemove={removeNotice}
            />
        </div>
    );
}

// Export Component
export { SaveNotices };
