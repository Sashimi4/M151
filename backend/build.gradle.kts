import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.3"
	id("io.spring.dependency-management") version "1.0.13.RELEASE"
	kotlin("jvm") version "1.6.21"
	kotlin("plugin.spring") version "1.6.21"
	kotlin("plugin.jpa") version "1.6.21"
}

group = "com.tinder"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-websocket:2.7.4")
	//implementation("org.springframework.boot:spring-boot-starter-security:2.7.4")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:2.7.4")
	implementation("org.hibernate.ogm:hibernate-ogm-mongodb:5.4.1.Final")
	implementation("org.postgresql:postgresql:42.5.0")
	implementation("org.springframework.boot:spring-boot-starter-data-mongodb:2.7.4")
	implementation("org.springframework.boot:spring-boot-starter-web:2.7.4")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.13.4")
	implementation("io.projectreactor.kotlin:reactor-kotlin-extensions:1.1.7")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor:1.6.4")
	compileOnly("org.projectlombok:lombok:1.18.24")
	annotationProcessor("org.projectlombok:lombok:1.18.24")
	testImplementation("org.springframework.boot:spring-boot-starter-test:2.7.4")
	testImplementation("io.projectreactor:reactor-test:3.4.23")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "16"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
