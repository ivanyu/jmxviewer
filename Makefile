.PHONY: clean clean-js clean-java
clean: clean-js clean-java

build-js: js/node_modules

js/node_modules:
	cd js && npm install

build-java: build-js
	./gradlew shadowJar

clean-js:
	rm -rf js/node_modules || true
	rm -f js/package-lock.json || true

clean-java:
	./gradlew clean

clean: clean-js clean-java

build: build-js build-java

run-js-dev-mode: js
	cd js && cat dev_mode_mock_functions.js > .dev_mode.js && cat index.js >> .dev_mode.js && node .dev_mode.js
