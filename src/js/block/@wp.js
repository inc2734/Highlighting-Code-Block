const wpBlockEditor = undefined === wp.blockEditor ? wp.editor : wp.blockEditor;
export const { __ } = wp.i18n,
    { RichText, InspectorControls } = wpBlockEditor,
    { registerBlockType } = wp.blocks,
    { Fragment } = wp.element,
    { PanelBody, RadioControl } = wp.components;