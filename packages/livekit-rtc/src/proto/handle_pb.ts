// Copyright 2023 LiveKit, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file handle.proto (package livekit.proto, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * # Safety
 * The foreign language is responsable for disposing handles
 * Forgetting to dispose the handle may lead to memory leaks
 *
 * Dropping a handle doesn't necessarily mean that the object is destroyed if it is still used
 * on the FfiServer (Atomic reference counting)
 *
 * When refering to a handle without owning it, we just use a uint32 without this message. 
 * (the variable name is suffixed with "_handle")
 *
 * @generated from message livekit.proto.FfiOwnedHandle
 */
export class FfiOwnedHandle extends Message<FfiOwnedHandle> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<FfiOwnedHandle>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "livekit.proto.FfiOwnedHandle";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FfiOwnedHandle {
    return new FfiOwnedHandle().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FfiOwnedHandle {
    return new FfiOwnedHandle().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FfiOwnedHandle {
    return new FfiOwnedHandle().fromJsonString(jsonString, options);
  }

  static equals(a: FfiOwnedHandle | PlainMessage<FfiOwnedHandle> | undefined, b: FfiOwnedHandle | PlainMessage<FfiOwnedHandle> | undefined): boolean {
    return proto3.util.equals(FfiOwnedHandle, a, b);
  }
}

