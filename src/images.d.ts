declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

// src/custom.d.ts
declare module '*.mp3' {
    const src: string;
    export default src;
}
