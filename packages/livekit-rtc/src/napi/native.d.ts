/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function livekitInitialize(callback: (data: Uint8Array) => void, captureLogs: boolean): void;
export function livekitFfiRequest(data: Uint8Array): Uint8Array;
export function livekitRetrievePtr(handle: Uint8Array): bigint;
export function livekitCopyBuffer(ptr: bigint, len: number): Uint8Array;
export function livekitDispose(): Promise<void>;
export class FfiHandle {
  constructor(handle: bigint);
  dispose(): void;
  get handle(): bigint;
}