/**
 * ------------------------------------------------------------------
 * Custom Media Upload
 * ------------------------------------------------------------------
 *
 * Uploads media files to the WordPress media library.
 *
 */

// WordPress Dependencies
import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

// Allowed Media Types
const ALLOWED_MEDIA_TYPES = ["image"];

/**
 * Custom Media Upload
 */
function CustomMediaUpload({
    mediaIDs,
    onSelect,
    gallery,
    multiple,
    buttonText,
}) {
    return (
        <MediaUpload
            onSelect={onSelect}
            allowedTypes={ALLOWED_MEDIA_TYPES}
            value={mediaIDs}
            render={({ open }) => (
                <Button variant="secondary" onClick={open}>
                    {buttonText}
                </Button>
            )}
            gallery={gallery}
            multiple={multiple}
        />
    );
}

// Export Component
export { CustomMediaUpload };
