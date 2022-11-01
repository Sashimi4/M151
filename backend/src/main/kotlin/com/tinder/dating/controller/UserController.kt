package com.tinder.dating.controller

import com.tinder.dating.service.UserService
import com.tinder.dating.sqlData.domain.dto.UserDTO
import com.tinder.dating.sqlData.repo.CountryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class UserController @Autowired constructor(
    private val userService: UserService,
    private val countryRepository: CountryRepository
) {

    @GetMapping("/")
    fun getUserByEmail(@Payload email: String): ResponseEntity<Any> {
        val user = userService.findUserByEmail(email)
        return ResponseEntity.ok(user)
    }

    @GetMapping("/testUser")
    fun test(): UserDTO {
        return UserDTO(UUID.randomUUID(), "LoremIpsum5@email.com", "Spain")
    }

    // User Controllers

    @GetMapping("/users")
    fun getAllUsers(): ResponseEntity<Any> {
        val users = userService.findAllUsers()
        val userEmails = mutableListOf<String>()
        for (user in users) {
            userEmails.add(user.email)
        }
        return ResponseEntity.ok(userEmails)
    }

    // Country Controllers

    @GetMapping("/countries")
    fun getAllCountryOptions(): MutableIterable<String> {
        val countries = countryRepository.findAll()
        val countryNames = mutableListOf<String>()
        for (country in countries) {
            countryNames.add(country.countryName)
        }
        return countryNames
    }
}