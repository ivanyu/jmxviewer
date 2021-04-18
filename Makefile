##
# Copyright 2021 Ivan Yurchenko
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
##

.PHONY: clean clean-js clean-java
clean: clean-js clean-java

build-js: js/node_modules js/bundle.js

js/node_modules:
	cd js && npm install

js/bundle.js:
	cd js && npx browserify --ignore-missing --node -o bundle.js index.js

build-java: build-js
	./gradlew shadowJar

clean-js:
	rm -rf js/node_modules || true
	rm -f js/package-lock.json || true

clean-java:
	./gradlew clean

clean: clean-js clean-java

build: build-js build-java

run-js-dev-mode: js/node_modules
	cd js && cat dev_mode_mock_functions.js > .dev_mode.js && cat index.js >> .dev_mode.js && node .dev_mode.js

run-js-dev-mode-bundle: js/bundle.js
	cd js && cat dev_mode_mock_functions.js > .dev_mode.js && cat bundle.js >> .dev_mode.js && node .dev_mode.js
