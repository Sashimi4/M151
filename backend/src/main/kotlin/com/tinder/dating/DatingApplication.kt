package com.tinder.dating

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.SpringApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication(scanBasePackages = [ "com.tinder.dating" ])
@EnableMongoRepositories
class DatingApplication

fun main(args: Array<String>) {
	SpringApplication.run(DatingApplication::class.java, *args)
}
