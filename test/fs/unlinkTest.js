/*
 * Copyright 2020, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    "../../fs/exists",
    "../../fs/unlink",
    "../../fs/writeFile",
    "../support/assert",
    "../support/scratchDir"
], function(exists, unlink, writeFile, assert, scratchDir) {
    "use strict";

    print("test: fs/unlink");

    var file = scratchDir + "unlinkTest";
    writeFile(file, "foo");
    assert(exists(file));
    unlink(file);
    assert(!exists(file));

});
