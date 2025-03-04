import { fabric } from 'fabric-pure-browser';
import { useFabricJSEditor, FabricJSEditor, FabricJSEditorHook } from './editor';
export interface Props {
    className?: string;
    onReady?: (canvas: fabric.Canvas) => void;
}
/**
 * Fabric canvas as component
 */
declare const FabricJSCanvas: ({ className, onReady }: Props) => any;
export { FabricJSCanvas, useFabricJSEditor };
export type { FabricJSEditor, FabricJSEditorHook };
