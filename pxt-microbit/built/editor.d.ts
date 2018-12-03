/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
interface Math {
    imul(x: number, y: number): number;
}
declare namespace pxt.editor {
    const bufferConcat: (bufs: Uint8Array[]) => Uint8Array;
}
