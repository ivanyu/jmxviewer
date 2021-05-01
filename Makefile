.PHONY: clean
	./gradlew clean

.PHONY: build
build:
	./gradlew shadowJar
