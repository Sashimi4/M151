package com.tinder.dating.controller

import com.tinder.dating.service.UserService
import com.tinder.dating.sqlData.domain.Country
import com.tinder.dating.sqlData.domain.dto.UserDTO
import com.tinder.dating.sqlData.repo.CountryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class UserController @Autowired constructor(
    private val userService: UserService,
    private val countryRepository: CountryRepository
) {

    @GetMapping("/user/{email}")
    @PreAuthorize("hasAuthority('read:allusers')")
    fun getUserByEmail(@Payload email: String): ResponseEntity<Any> {
        val user = userService.findUserByEmail(email)
        return ResponseEntity.ok(user)
    }

    // User Controllers
    @GetMapping("/user")
    @PreAuthorize("hasAuthority('read:allusers')")
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
    @PreAuthorize("hasAuthority('read:allcountries')")
    fun getAllCountryOptions(): ResponseEntity<MutableIterable<Country>> {
        val countries = countryRepository.findAll()
        return ResponseEntity.ok(countries)
    }
}