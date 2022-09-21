package com.tinder.dating

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DatingApplication

fun main(args: Array<String>) {
	runApplication<DatingApplication>(*args)
}
