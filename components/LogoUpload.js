import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

const { __ } = wp.i18n;

function SiteLogoUpload(mediaIDs, onSelect) {
    return (
        <Fragment>
            <MediaUpload
                onSelect={onSelect}
                allowedTypes={ALLOWED_MEDIA_TYPES}
                value={mediaIDs}
                render={({ open }) => (
                    <Button
                        icon={upload}
                        variant="primary"
                        label="Upload or Select Image"
                        showTooltip
                        tooltipPosition="top center"
                        onClick={open}
                    />
                )}
            />
        </Fragment>
    );
}

export { SiteLogoUpload };
