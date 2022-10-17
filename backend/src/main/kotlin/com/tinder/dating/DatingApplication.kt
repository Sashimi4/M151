package com.tinder.dating

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.SpringApplication

@SpringBootApplication
class DatingApplication

fun main(args: Array<String>) {
	SpringApplication.run(DatingApplication::class.java, *args)
}
