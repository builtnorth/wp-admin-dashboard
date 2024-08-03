/**
 * Media Upload Handler
 *
 * @link https://gist.github.com/5ally/633c4142b77d46068d447cceac3dbc99
 */
import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const ALLOWED_MEDIA_TYPES = ["image"];

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
