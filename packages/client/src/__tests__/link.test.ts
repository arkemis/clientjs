/*
 * Copyright 2023-2024 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TLinkRef } from "../types";

describe("TLinkRef", () => {
  it("describes the arke or group a link parameter points to", () => {
    const toArke: TLinkRef = { id: "user", arke_id: "arke" };
    const toGroup: TLinkRef = { id: "arke_auth_member", arke_id: "group" };
    // @ts-expect-error a link points only to an arke or a group
    const invalid: TLinkRef = { id: "user", arke_id: "unit" };

    expect([toArke, toGroup, invalid].map((ref) => ref.arke_id)).toEqual([
      "arke",
      "group",
      "unit",
    ]);
  });
});
